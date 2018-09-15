import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBarContainer, MatInputModule, MatButtonModule, MatSnackBarModule, MatSnackBar } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppLoginService } from '../shared/app-login.service';
//import { CanActivateLoggedIn } from '../shared/can-active-logged-in';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SessionRoutes } from './session.routes';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';
import { ConfirmPasswordModule } from '../shared/confirm-password/confirm-password.module';
import { PhoneNumberModule } from '../pipes/phone-number/phone-number.module';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(SessionRoutes),
    FormsModule,
    ConfirmPasswordModule,
    PhoneNumberModule,
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent,
    ForgotPasswordComponent, 
    LogoutComponent],
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
