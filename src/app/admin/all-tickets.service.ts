import { Injectable } from '@angular/core';
import { ConfigService } from '../shared/config.service';
import { Ticket } from '../models/ticket';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AllTicketsService {

    constructor(private configService: ConfigService, private http: HttpClient) {
    }

    getTickets(token: string): Promise<Array<Ticket>> {
        let url = this.configService.getApiUrl() + "/all/tickets"
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.http.get<Array<Ticket>>(url, { headers: headers })
            .toPromise();
    }

}
