import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBarContainer, MatInputModule, MatButtonModule, MatSnackBarModule, MatSnackBar } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ConfigService } from '../shared/config.service';
import { LoginService } from '../shared/login.service';
import { AppLoginService } from '../shared/app-login.service';
//import { CanActivateLoggedIn } from '../shared/can-active-logged-in';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SessionRoutes } from './session.routes';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(SessionRoutes),
    FormsModule,
    HttpModule,
  ],
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, LogoutComponent],
  providers: [
    AppLoginService,
    MatSnackBar,
    /*
    ConfigService,
    LoginService,
    CanActivateLoggedIn,
    SessionStorageService,
    WINDOW_PROVIDER,
    */
  ],
  entryComponents: [MatSnackBarContainer]
})
export class SessionModule { }
