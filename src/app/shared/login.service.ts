import { Injectable } from '@angular/core';

import { SessionStorage, SessionStorageService } from 'ng2-webstorage';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';


export class UserInfo {
  constructor(email: string, firstname: string, lastname: string, token: string) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.token = token;
  }
  email: string;
  firstname: string;
  lastname: string;
  token: string;
}


export class LoginInformation {
  userInfo: UserInfo;
}


@Injectable()
export class LoginService {

  private p_loginInfo: LoginInformation;

  private p_promises: Array<any>;

  constructor(private _sessionStorageService: SessionStorageService) {
    this.p_loginInfo = JSON.parse(this._sessionStorageService.retrieve('loginInfo'));
    this.p_promises = [];
  }

  getLoginInformationPromise(): Promise<LoginInformation> {
    return new Promise((resolve, reject) => {
      resolve(this.p_loginInfo);
    });
  }

  getLoginInformation(): Observable<LoginInformation> {
    let this_obj = this;
    return Observable.create(observer => {
      this.p_promises.push(observer);
      observer.next(this.p_loginInfo);
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.getLoginInformation().map((loginInfo: LoginInformation) => {
      return loginInfo != null;
    });
  }

  private resolvePromises(): void {
    for (var observer of this.p_promises) {
      observer.next(this.p_loginInfo);
    }
  }


  login(userinfo: UserInfo): void {
    this.p_loginInfo = new LoginInformation();
    this.p_loginInfo.userInfo = userinfo;
    this._sessionStorageService.store('loginInfo', JSON.stringify(this.p_loginInfo));
    this.resolvePromises();
  }

  logout(): void {
    this.p_loginInfo = null;
    this._sessionStorageService.clear('loginInfo');
    this.resolvePromises();
  }

  getToken(): Observable<string> {
    return this.getLoginInformation().map((loginInfo: LoginInformation) => loginInfo.userInfo.token);
  }

  getEmail(): Observable<string> {
    return this.getLoginInformation().map((loginInfo: LoginInformation) => loginInfo.userInfo.email);
  }

}

