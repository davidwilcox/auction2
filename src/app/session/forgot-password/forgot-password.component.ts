import { Component, OnInit } from '@angular/core';

import { AppLoginService } from '../../shared/app-login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  message: string;
  constructor(private _appLoginService: AppLoginService) { }

  ngOnInit() {
  }

  forgotPassword(): void {
    this._appLoginService.forgotPassword(this.email).then(
      (msg: any) => {
        if (msg.sent == true)
          this.message = "An email has been sent to you to reset your password.";
        else
          this.message = "This is embarrasing. We had a problem. Email dawilcox@adobe.com for more help.";
      }, (err) => {
        this.message = JSON.stringify(err);
      }
    );
  }

}
