import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppLoginService } from '../../shared/app-login.service';
import { LoginService, UserInfo } from '../../shared/login.service';

import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private _appLoginService: AppLoginService, private _loginService: LoginService, private _router: Router, private _snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  login(): void {
    console.log("logging in");
    this._appLoginService.login(this.email, this.password).then((message: any) => {
      console.log("first");
      if (message.token) {
        this._loginService.login(new UserInfo(this.email, "", message.token));
        this._snackBar.open("Successfully logged in.", "Dismiss", {
          duration: 2000
        });
        this._router.navigate(["/requisitions/dashboard"]);
      } else {
        this._snackBar.open(message, "Dismiss", {
          duration: 2000
        });
      }
    });
  }

}
