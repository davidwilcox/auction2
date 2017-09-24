import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
      routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
