import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdSnackBarContainer, MdInputModule, MdButtonModule, MdSnackBarModule, MdSnackBar, OVERLAY_PROVIDERS, ScrollStrategyOptions } from '@angular/material';
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
    MdSnackBarModule,
    MdInputModule,
    MdButtonModule,
    RouterModule.forChild(SessionRoutes),
    FormsModule,
    HttpModule,
  ],
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, LogoutComponent],
  providers: [
    AppLoginService,
    MdSnackBar,
    OVERLAY_PROVIDERS,
    ScrollStrategyOptions,
    /*
    ConfigService,
    LoginService,
    CanActivateLoggedIn,
    SessionStorageService,
    WINDOW_PROVIDER,
    */
  ],
  entryComponents: [MdSnackBarContainer]
})
export class SessionModule { }
