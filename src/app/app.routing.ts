import { Routes, RouterModule } from '@angular/router';

import { SplashPageComponent } from './splash-page/splash-page.component';

const appRoutes: Routes = [
    { path: '', component: SplashPageComponent },
    { path: "session", loadChildren: "app/session/session.module#SessionModule" },
    { path: "buytickets", loadChildren: "app/buy-tickets/buy-tickets.module#BuyTicketsModule" },
    { path: "donateitem", loadChildren: "app/donate-item/donate-item.module#DonateItemModule" },
    { path: "myauction", loadChildren: "app/my-auction/my-auction.module#MyAuctionModule" },
    { path: "admin", loadChildren: "app/admin/admin.module#AdminModule" },

];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
