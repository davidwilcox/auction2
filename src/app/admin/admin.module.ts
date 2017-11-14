import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



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

import { AllTicketsService } from './all-tickets.service';
import { AllItemsService } from './all-items.service';

import { MatSelectModule, MatButtonModule, MatCardModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateService, TRANSLATION_PROVIDERS, TranslatePipe, TranslateModule } from '../translations';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MatButtonModule,
    HttpModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatSelectModule,
    TranslateModule,
  ],
  providers: [
    AllTicketsService,
    AllItemsService,
    TRANSLATION_PROVIDERS,
    TranslateService
  ],
  declarations: [HomeComponent,
    RegisteredPeopleComponent,
    ModifyDonatedItemsComponent,
    InsertBidsComponent,
    AddAdminComponent,
    SilentBidSheetsComponent,
    LiveCatalogComponent,
    LivePrintComponent,
    FixedPriceSheetsComponent,
    ChargeForItemsComponent,
    BidCardsComponent]
})
export class AdminModule { }
