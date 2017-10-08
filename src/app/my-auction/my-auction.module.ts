import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyAuctionRoutes } from './my-auction.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MyAuctionRoutes),
  ],
  declarations: [HomeComponent]
})
export class MyAuctionModule { }
