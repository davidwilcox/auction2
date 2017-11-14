import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { MyDonatedItemsComponent } from './my-donated-items/my-donated-items.component';
import { MyInvoiceComponent } from './my-invoice/my-invoice.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

export const MyAuctionRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'my_tickets', component: MyTicketsComponent },
    { path: 'my_donated_items', component: MyDonatedItemsComponent },
    { path: 'my_invoice', component: MyInvoiceComponent },
    { path: 'my_profile', component: MyProfileComponent },
];