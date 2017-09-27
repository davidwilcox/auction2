import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdButtonModule, MdSnackBarModule, MdSnackBar, OVERLAY_PROVIDERS, ScrollStrategyOptions } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ConfigService } from '../shared/config.service';
import { LoginService } from '../shared/login.service';
import { AppLoginService } from '../shared/app-login.service';
//import { CanActivateLoggedIn } from '../shared/can-active-logged-in';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SessionRoutes } from './session.routes';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdButtonModule,
    RouterModule.forChild(SessionRoutes),
    FormsModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
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
  ]
})
export class SessionModule { }
