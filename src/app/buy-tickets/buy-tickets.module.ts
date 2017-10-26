import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdToolbarModule, MdInputModule, MdCardModule, MdButtonModule, MdIconModule, MdRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StripeCheckoutModule } from 'ng-stripe-checkout';

import { FlexLayoutModule } from '@angular/flex-layout';


import { BuyTicketsRoutes } from './buy-tickets.routes';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { BuyTicketsConfirmationComponent } from './buy-tickets-confirmation/buy-tickets-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BuyTicketsRoutes),
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    FormsModule,
    MdButtonModule,
    MdRadioModule,
    MdIconModule,
    FlexLayoutModule,
    StripeCheckoutModule,
  ],
  declarations: [BuyTicketsComponent, BuyTicketsConfirmationComponent]
})
export class BuyTicketsModule { }
