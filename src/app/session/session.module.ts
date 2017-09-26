import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


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
  declarations: [LoginComponent, RegisterComponent]
})
export class SessionModule { }
