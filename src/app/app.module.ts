import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ValueProvider } from '@angular/core';

/*
MatAutocompleteModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatChipsModule,
MatCheckboxModule,
MatDialogModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRadioModule,
MatRippleModule,
MatSelectModule,
MatSidenavModule,
MatSliderModule,
MatSlideToggleModule,
MatSnackBarModule,
MatTabsModule,
MatToolbarModule,
MatTooltipModule,
OverlayModule,
PortalModule,
RtlModule,
StyleModule,
A11yModule,
PlatformModule,
CompatibilityModule,
ObserveContentModule
*/

import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SessionStorageService } from 'ng2-webstorage';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { routing } from './app.routing';

import { ConfigService } from './shared/config.service';
import { LoginService } from './shared/login.service';
import { CanActivateLoggedIn } from './shared/can-activate-logged-in';

import { TranslatePipe } from './translations';

const WINDOW_PROVIDER: ValueProvider = {
  provide: 'Window',
  useValue: window
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SplashPageComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    routing,
    NoopAnimationsModule,
  ],
  providers: [
    ConfigService,
    LoginService,
    CanActivateLoggedIn,
    SessionStorageService,
    WINDOW_PROVIDER,
    TranslatePipe,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
