import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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

import {  } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SplashPageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpModule,
    NoopAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
