import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatRadioModule } from '@angular/material';
import { DonateItemComponent, DonationSuggestionsDialog } from './donate-item/donate-item.component';
import { DonateItemRoutes } from './donate-item.routes';
import { DonateItemConfirmationComponent } from './donate-item-confirmation/donate-item-confirmation.component';
import { FormsModule } from '@angular/forms';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';
import { TranslateService, TRANSLATION_PROVIDERS, TranslateModule, TranslatePipe } from '../translations';

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
  ],
  declarations: [DonateItemComponent,
    DonateItemConfirmationComponent,
    DonationSuggestionsDialog,
    PhoneNumberPipe,
  ],
  bootstrap: [DonationSuggestionsDialog],
  providers: [TRANSLATION_PROVIDERS, TranslateService]
})
export class DonateItemModule { }
