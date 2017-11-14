import { Component, OnInit } from '@angular/core';
import { AllTicketsService } from '../all-tickets.service';
import { LoginService, LoginInformation } from '../../shared/login.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-registered-people',
  templateUrl: './registered-people.component.html',
  styleUrls: ['./registered-people.component.scss']
})
export class RegisteredPeopleComponent implements OnInit {

  constructor(private _loginService: LoginService, private _allTicketsService: AllTicketsService) { }

  ngOnInit() {
    this._loginService.getLoginInformationPromise().then((info: LoginInformation) => {
      this._allTicketsService.getTickets(info.userInfo.token).then((tickets) => {
        this.tickets = tickets;
        console.log(this.tickets);
      });
    });
  }

  tickets: Array<Ticket>;
}
