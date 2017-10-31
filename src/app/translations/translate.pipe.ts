import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service'; // our translate service

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {

  constructor(private _translate: TranslateService) { }

  transform(value: string, args: any[]): any {
    console.log(value);
    if (!value) return;
    return this._translate.instant(value);
  }
}