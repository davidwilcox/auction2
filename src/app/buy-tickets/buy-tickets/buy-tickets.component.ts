import { Component, OnInit } from '@angular/core';
import { LoginInformation, LoginService } from '../../shared/login.service';
import { StripeCheckoutLoader, StripeCheckoutHandler } from 'ng-stripe-checkout';

import { Ticket } from '../../models/ticket';

import { ConfigService } from '../../shared/config.service';
import { BuyTicketsService } from '../buy-tickets.service';
import { MatDialog } from '@angular/material';
import { BarHelpComponent } from '../bar-help/bar-help.component';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.scss']
})
export class BuyTicketsComponent implements OnInit {

  constructor(
    private _loginService: LoginService,
    private _stripeCheckoutLoader: StripeCheckoutLoader,
    private _configService: ConfigService,
    private _buyTicketsService: BuyTicketsService,
    private _dialog: MatDialog) { }

  ngOnInit() {
    this._loginService.getLoginInformation().subscribe((loginInformation: LoginInformation) => {
      this._loginInformation = loginInformation;
    });
    this.tickets = new Array<Ticket>();
    this.addTicket();
    this.barDonation = 0;
    this.computeOrderDetails();
  }

  isLoggedIn(): boolean {
    return this._loginInformation != null;
  }

  removeTicket(index: number) {
    this.tickets.splice(index, 1);
  }

  phoneNumberChange(ticket: Ticket, str: string): void {
    ticket.phone = str;
  }

  addTicket(): void {
    let ticket = this.createTicket();
    if (this._loginInformation) {
      ticket.firstname = this._loginInformation.userInfo.firstname;
      ticket.lastname = this._loginInformation.userInfo.lastname;
      ticket.email = this._loginInformation.userInfo.email;
      ticket.phone = this._loginInformation.userInfo.phonenumber;
    }
    this.tickets.push(ticket);
    this.computeOrderDetails();
  }

  computeOrderDetails(): void {
    this.numAdultTickets = this.numJuniorHighTickets = this.numChildTickets = this.numPrekTickets = this.numHighSchoolTickets = 0;

    for (let ticket of this.tickets) {
      switch (ticket.agegroup) {
        case "ADULT_TICKET":
          this.numAdultTickets++;
          break;
        case "HIGHSCHOOL_TICKET":
          this.numHighSchoolTickets++;
          break;
        case "JUNIORHIGH_TICKET":
          this.numJuniorHighTickets++;
          break;
        case "CHILD_TICKET":
          this.numChildTickets++;
          break;
        case "PREK_TICKET":
          this.numPrekTickets++;
          break;
      }
    }
    this.total = this.calculateTotal();
  }

  calculateTotal(): number {
    return this.numAdultTickets * 16
      + this.numHighSchoolTickets * 12
      + this.numJuniorHighTickets * 5
      + this.numChildTickets * 5
      + this.numPrekTickets * 0
      + this.barDonation;
  }

  private createTicket(): Ticket {
    return new Ticket();
  }

  private getPurchaser(): string {
    return this.tickets[0].email;
  }

  public ngAfterViewInit() {
    this._stripeCheckoutLoader.createHandler({
      key: this._configService.getStripeToken(),
      token: (token) => {
        // Do something with the token...
        console.log('Payment successful!', token);
        this._buyTicketsService.buyTickets(this.getPurchaser(), token.id, this.calculateTotal()*100, this.tickets, this.barDonation).then((results) => {
          console.log(results);
        });
      }
    }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
    });
  }

  public onClickBuy(): void {
    console.log("HERE");
    let email = this.tickets[0].email;
    if (this._loginInformation && this._loginInformation.userInfo)
      email = this._loginInformation.userInfo.email;
    this.stripeCheckoutHandler.open({
      email: email,
      amount: this.calculateTotal() * 100,
      currency: 'USD',
    });
  }

  public onClickCancel() {
    this.stripeCheckoutHandler.close();
    // If the window has been opened, this is how you can close it:
  }

  showBarHelp() {
    console.log("BAR HELP");
    this._dialog.open(BarHelpComponent, {})
  }


  private stripeCheckoutHandler: StripeCheckoutHandler;
  private _loginInformation: LoginInformation;

  tickets: Array<Ticket>;
  total: number;
  numAdultTickets: number;
  numHighSchoolTickets: number;
  numJuniorHighTickets: number;
  numChildTickets: number;
  numPrekTickets: number;
  barDonation: number;

}
