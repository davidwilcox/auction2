import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppLoginService } from '../../shared/app-login.service';
import { LoginService, UserInfo } from '../../shared/login.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private _appLoginService: AppLoginService, private _loginService: LoginService, private _router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(): void {
    this._appLoginService.login(this.email, this.password).then((message: any) => {
      if (message.token) {
        this._loginService.login(new UserInfo(message.user, message.token));
        this._snackBar.open("Successfully logged in.", "Dismiss", {
          duration: 3000
        });
        this._router.navigate(["/"]);
      } else {
        this._snackBar.open(message.message, "Dismiss", {
          duration: 3000
        });
      }
    });
  }

}
