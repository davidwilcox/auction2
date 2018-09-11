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

import { MatButtonModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SessionStorageService } from 'ng2-webstorage';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SplashPageComponent, DonationSuggestionsDialogSplash } from './splash-page/splash-page.component';
import { routing } from './app.routing';

import { ConfigService } from './shared/config.service';
import { LoginService } from './shared/login.service';
import { CanActivateLoggedIn } from './shared/can-activate-logged-in';

import { TranslatePipe } from './translations';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

const WINDOW_PROVIDER: ValueProvider = {
  provide: 'Window',
  useValue: window
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SplashPageComponent,
    DonationSuggestionsDialogSplash,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    HttpClientModule,
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
  bootstrap: [AppComponent],
  entryComponents: [DonationSuggestionsDialogSplash],
})
export class AppModule { }
