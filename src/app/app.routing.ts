import { Routes, RouterModule } from '@angular/router';

import { SplashPageComponent } from './splash-page/splash-page.component';

const appRoutes: Routes = [
    { path: '', component: SplashPageComponent },
    { path: "session", loadChildren: "app/session/session.module#SessionModule" },
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
