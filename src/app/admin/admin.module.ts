import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminRoutes } from './admin.routes';
import { RegisteredPeopleComponent } from './registered-people/registered-people.component';
import { ModifyDonatedItemsComponent } from './modify-donated-items/modify-donated-items.component';
import { InsertBidsComponent } from './insert-bids/insert-bids.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { SilentBidSheetsComponent } from './silent-bid-sheets/silent-bid-sheets.component';
import { LiveCatalogComponent } from './live-catalog/live-catalog.component';
import { LivePrintComponent } from './live-print/live-print.component';
import { FixedPriceSheetsComponent } from './fixed-price-sheets/fixed-price-sheets.component';
import { ChargeForItemsComponent } from './charge-for-items/charge-for-items.component';
import { BidCardsComponent } from './bid-cards/bid-cards.component';

import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MdButtonModule,
  ],
  declarations: [HomeComponent, RegisteredPeopleComponent, ModifyDonatedItemsComponent, InsertBidsComponent, AddAdminComponent, SilentBidSheetsComponent, LiveCatalogComponent, LivePrintComponent, FixedPriceSheetsComponent, ChargeForItemsComponent, BidCardsComponent]
})
export class AdminModule { }
