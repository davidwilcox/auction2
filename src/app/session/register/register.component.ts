import { Component, OnInit } from '@angular/core';
import { AppLoginService, TokenResponse } from '../../shared/app-login.service';
import { UserAttributes } from '../../models/user-attributes.model';
import { LoginService, UserInfo, User } from '../../shared/login.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  password: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;

  constructor(private _appLoginService: AppLoginService, private _loginService: LoginService,
    private _snackbar: MatSnackBar, private _router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(this.email);
    console.log(this.firstname);
    this._appLoginService.register(this.email, this.password,
      new UserAttributes(this.firstname, this.lastname, this.phoneNumber))
      .then((tokenResponse: TokenResponse) => {
        this._loginService.login(new UserInfo(new User(this.email,
          this.firstname, this.lastname, false, this.phoneNumber, ""), tokenResponse.token));
        this._router.navigate(["/"]);
        this._snackbar.open("You've registered and logged in.", "Dismiss", {
          duration: 5000
        });
      }).catch((message) => {
        this._snackbar.open(message.error.message, "Dismiss", {
          duration: 5000
        });
      });
  }

  setPassword(password: string) {
    this.password = password;
  }

  setReason(reason: string) {
  }

  phoneNumberChange(newNum: string) {
    this.phoneNumber = newNum;
  }
}
