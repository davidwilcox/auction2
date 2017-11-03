import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import {BidCardsComponent } from './bid-cards/bid-cards.component';
import {ChargeForItemsComponent } from './charge-for-items/charge-for-items.component';
import {FixedPriceSheetsComponent } from './fixed-price-sheets/fixed-price-sheets.component';
import {InsertBidsComponent } from './insert-bids/insert-bids.component';
import {LiveCatalogComponent } from './live-catalog/live-catalog.component';
import {LivePrintComponent } from './live-print/live-print.component';
import {ModifyDonatedItemsComponent } from './modify-donated-items/modify-donated-items.component';
import {RegisteredPeopleComponent } from './registered-people/registered-people.component';
import { SilentBidSheetsComponent} from './silent-bid-sheets/silent-bid-sheets.component';

export const AdminRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'registered_people', component: RegisteredPeopleComponent},
    { path: 'modify_donated_items', component: ModifyDonatedItemsComponent},
    { path: 'insert_bids', component: InsertBidsComponent},
    { path: 'add_admin', component: AddAdminComponent},
    { path: 'silent_bid_sheets', component: SilentBidSheetsComponent},
    { path: 'live_catalog', component: LiveCatalogComponent},
    { path: 'live_print', component: LivePrintComponent},
    { path: 'fixed_price_sheets', component: FixedPriceSheetsComponent},
    { path: 'charge_for_items', component: ChargeForItemsComponent},
    {path: 'bid_cards', component: BidCardsComponent},
];