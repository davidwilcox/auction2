import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminRoutes } from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
  ],
  declarations: [HomeComponent]
})
export class AdminModule { }
