import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConfigService } from './config.service';
import { UserAttributes } from '../models/user-attributes.model';


import 'rxjs/add/operator/toPromise';


@Injectable()
export class AppLoginService {

    constructor(private configService: ConfigService, private http: Http) {
    }

    register(email: string, password: string, userAttributes: UserAttributes): Promise<string> {
        let url = this.configService.getApiUrl() + "/register"
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(url, {
            email: email,
            password: password,
            userAttributes: userAttributes
        }, { headers: headers })
            .toPromise()
            .then((response) => response.json())
            .catch((reason) => reason.json());
    }

    login(email: string, password: string): Promise<string> {
        let url = this.configService.getApiUrl() + "/login"
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, {
            email: email,
            password: password,
        }, { headers: headers })
            .toPromise()
            .then((response) => response.json())
            .catch((reason) => reason.json());
    }

    verifyRegistration(email: string, token: string): Promise<string> {
        let url = this.configService.getApiUrl() + "/session/verifyUser"
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, {
            email: email,
            verificationToken: token
        }, { headers: headers })
            .toPromise()
            .then((response) => response.json())
            .catch((reason) => reason.json());
    }

    forgotPassword(email: string): Promise<string> {
        let url = this.configService.getApiUrl() + "/lost_password";
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        console.log(email);
        return this.http.post(url, { email: email }, { headers: headers })
            .toPromise()
            .then((response) => response.json())
            .catch((reason) => reason.json());
    }

};