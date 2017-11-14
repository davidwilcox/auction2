import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from './translate.service';
import { TRANSLATION_PROVIDERS } from './translations';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TranslatePipe],
  providers: [TranslateService, TRANSLATION_PROVIDERS],
  exports: [
    TranslatePipe
  ]
})
export class TranslateModule { }
