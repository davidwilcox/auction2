import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DonateItemComponent } from './donate-item/donate-item.component';
import { DonateItemRoutes } from './donate-item.routes';
import { DonateItemConfirmationComponent } from './donate-item-confirmation/donate-item-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DonateItemRoutes),
  ],
  declarations: [DonateItemComponent, DonateItemConfirmationComponent]
})
export class DonateItemModule { }
