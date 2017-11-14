import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../shared/config.service';
import { LoginService, LoginInformation } from '../shared/login.service';
import { Item } from '../models/item';
import { Transaction } from '../models/transaction';
import { Ticket } from '../models/ticket';

export class AllItemInfo {
  constructor(items: Array<Item>, transactions: Array<Transaction>, tickets: Array<Ticket>) {
    this.items = items;
    this.transactions = transactions;
    this.tickets = tickets;
  }
  items: Array<Item>;
  transactions: Array<Transaction>;
  tickets: Array<Ticket>;
}


@Injectable()
export class AllItemsService {

  constructor(private configService: ConfigService, private http: Http, private loginService: LoginService) {
  }

  register(email: string, password: string): Promise<any> {
    return this.loginService.getLoginInformationPromise().then((value: LoginInformation) => {

      let itemsurl = this.configService.getApiUrl() + "/allitems";
      let ticketsurl = this.configService.getApiUrl() + "/all/tickets";
      let transactionsurl = this.configService.getApiUrl() + "/all/transactions";

      let promises = [];

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      promises.push(this.http.get(itemsurl).toPromise());
      promises.push(this.http.get(ticketsurl).toPromise());
      promises.push(this.http.get(transactionsurl).toPromise());

      return Promise.all(promises).then((value) => {
        return new AllItemInfo(value[0], value[1], value[2]);
      }).catch((reason) => reason.json());
    });
  }
}
