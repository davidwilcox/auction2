import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { ConfigService } from '../shared/config.service';
import { UserAttributes } from '../models/user-attributes.model';
import { Ticket } from '../models/ticket';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AllTicketsService {

    constructor(private configService: ConfigService, private http: Http) {
    }

    getTickets(token: string): Promise<Array<Ticket>> {
        let url = this.configService.getApiUrl() + "/all/tickets"
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.http.get(url, { headers: headers })
            .toPromise()
            .then((response) => response.json())
            .catch((reason) => reason.json());
    }

}
