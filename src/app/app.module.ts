import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ValueProvider } from '@angular/core';

/*
MdAutocompleteModule,
MdButtonModule,
MdButtonToggleModule,
MdCardModule,
MdChipsModule,
MdCheckboxModule,
MdDialogModule,
MdGridListModule,
MdIconModule,
MdInputModule,
MdListModule,
MdMenuModule,
MdProgressBarModule,
MdProgressSpinnerModule,
MdRadioModule,
MdRippleModule,
MdSelectModule,
MdSidenavModule,
MdSliderModule,
MdSlideToggleModule,
MdSnackBarModule,
MdTabsModule,
MdToolbarModule,
MdTooltipModule,
OverlayModule,
PortalModule,
RtlModule,
StyleModule,
A11yModule,
PlatformModule,
CompatibilityModule,
ObserveContentModule
*/

import { MdButtonModule, MdToolbarModule } from '@angular/material';
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
    MdButtonModule,
    MdToolbarModule,
    routing,
    NoopAnimationsModule,
  ],
  providers: [
    ConfigService,
    LoginService,
    CanActivateLoggedIn,
    SessionStorageService,
    WINDOW_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
