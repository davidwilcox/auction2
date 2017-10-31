import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdCardModule, MdDialogModule, MdInputModule, MdRadioModule } from '@angular/material';
import { DonateItemComponent, DonationSuggestionsDialog } from './donate-item/donate-item.component';
import { DonateItemRoutes } from './donate-item.routes';
import { DonateItemConfirmationComponent } from './donate-item-confirmation/donate-item-confirmation.component';
import { FormsModule } from '@angular/forms';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';
import { TranslateService, TRANSLATION_PROVIDERS, TranslatePipe } from '../translations';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DonateItemRoutes),
    FormsModule,
    MdInputModule,
    MdCardModule,
    MdDialogModule,
    MdButtonModule,
    MdRadioModule,
  ],
  declarations: [DonateItemComponent,
    DonateItemConfirmationComponent,
    DonationSuggestionsDialog,
    PhoneNumberPipe,    
    TranslatePipe,
  ],
  bootstrap: [DonationSuggestionsDialog],
  providers: [TRANSLATION_PROVIDERS, TranslateService]
})
export class DonateItemModule { }
