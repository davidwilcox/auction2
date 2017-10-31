import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(val: string, args?: any): any {
    val = val.replace('(', '');
    val = val.replace(')', '');
    val = val.replace('-', '');
    val = val.replace(' ', '');
    
    let numdigits = val.length;
    if (numdigits >= 6) {
      let firstpart = val.substr(0, 6);
      let secondpart = val.substr(6);
      val = firstpart + '-' + secondpart;
    } if ( numdigits >= 3 ) {
      let firstpart = val.substr(0,3);
      let secondpart = val.substr(3);
      val = firstpart + ') ' + secondpart;
    } if ( numdigits > 0 ) {
      val = '(' + val;
    }
    return val;
  }
}
