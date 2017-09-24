import { Routes, RouterModule } from '@angular/router';

import { SplashPageComponent } from './splash-page/splash-page.component';

const appRoutes: Routes = [
    { path: '', component: SplashPageComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
