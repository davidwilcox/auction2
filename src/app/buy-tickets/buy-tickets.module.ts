import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StripeCheckoutModule } from 'ng-stripe-checkout';

import { FlexLayoutModule } from '@angular/flex-layout';


import { BuyTicketsRoutes } from './buy-tickets.routes';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { BuyTicketsConfirmationComponent } from './buy-tickets-confirmation/buy-tickets-confirmation.component';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';
import { PhoneNumberModule } from '../pipes/phone-number/phone-number.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BuyTicketsRoutes),
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    FlexLayoutModule,
    StripeCheckoutModule,
    PhoneNumberModule,
  ],
  declarations: [
    BuyTicketsComponent,
    BuyTicketsConfirmationComponent,]
})
export class BuyTicketsModule { }
