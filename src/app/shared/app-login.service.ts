import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { UserAttributes } from '../models/user-attributes.model';


import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AppLoginService {

    constructor(private configService: ConfigService, private http: HttpClient) {
    }

    register(email: string, password: string, userAttributes: UserAttributes): Promise<string> {
        let url = this.configService.getApiUrl() + "/register"
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.put<string>(url, {
            email: email,
            password: password,
            userAttributes: userAttributes
        }, { headers: headers })
            .toPromise();
    }

    login(email: string, password: string): Promise<string> {
        let url = this.configService.getApiUrl() + "/login"
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post<string>(url, {
            email: email,
            password: password,
        }, { headers: headers })
            .toPromise();
    }

    verifyRegistration(email: string, token: string): Promise<string> {
        let url = this.configService.getApiUrl() + "/session/verifyUser"
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post<string>(url, {
            email: email,
            verificationToken: token
        }, { headers: headers })
            .toPromise();
    }

    forgotPassword(email: string): Promise<string> {
        let url = this.configService.getApiUrl() + "/lost_password";
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        console.log(email);
        return this.http.post<string>(url, { email: email }, { headers: headers })
            .toPromise();
    }

};