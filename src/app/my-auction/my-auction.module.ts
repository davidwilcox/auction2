import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyAuctionRoutes } from './my-auction.routes';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { MyDonatedItemsComponent } from './my-donated-items/my-donated-items.component';
import { MyInvoiceComponent } from './my-invoice/my-invoice.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MyAuctionRoutes),
    MatButtonModule,
  ],
  declarations: [HomeComponent, MyTicketsComponent, MyDonatedItemsComponent, MyInvoiceComponent, MyProfileComponent]
})
export class MyAuctionModule { }
