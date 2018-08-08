import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatRadioModule } from '@angular/material';
import { DonateItemComponent, DonationSuggestionsDialog } from './donate-item/donate-item.component';
import { DonateItemRoutes } from './donate-item.routes';
import { DonateItemConfirmationComponent } from './donate-item-confirmation/donate-item-confirmation.component';
import { FormsModule } from '@angular/forms';
import { TranslateService, TRANSLATION_PROVIDERS, TranslateModule } from '../translations';
import { PhoneNumberModule } from '../pipes/phone-number/phone-number.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DonateItemRoutes),
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    TranslateModule,
    PhoneNumberModule
  ],
  declarations: [
    DonateItemComponent,
    DonateItemConfirmationComponent,
    DonationSuggestionsDialog,
  ],
  bootstrap: [DonationSuggestionsDialog],
  providers: [TRANSLATION_PROVIDERS, TranslateService]
})
export class DonateItemModule { }
