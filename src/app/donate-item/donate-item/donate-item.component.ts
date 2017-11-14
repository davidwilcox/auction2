import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { createEmptyUserInfo, UserInfo } from '../../shared/login.service';
import { Item, Donor } from '../../models/item';
import { TranslateService } from '../../translations/translate.service';

@Component({
  selector: 'app-donate-item',
  templateUrl: './donate-item.component.html',
  styleUrls: ['./donate-item.component.scss']
})
export class DonateItemComponent implements OnInit {

  constructor(private _dialog: MatDialog, private _translateService: TranslateService) { }

  ngOnInit() {
    this.item = new Item();
    console.log(this.item.name);
    this.donor = createEmptyUserInfo();
    this.itemMaxLength = 50;
    this.descriptionMaxLength = 500;
    this.policies = ["KIDSFREE", "KIDSFREECOUNT", "EVERYBODYCOUNTS", "THREEPRICES", "OVER14", "OVER21", "KIDSPARTY"];
  }

  openDonationSuggestions(): void {
    this._dialog.open(DonationSuggestionsDialog, {
    });
  }

  phoneNumberChange(str: string): void {
    this.donor.phonenumber = str;
  }

  phoneNumber: string;
  donor: UserInfo;
  item: Item;
  itemMaxLength: number;
  descriptionMaxLength: number;
  policies: Array<string>;
}


@Component({
  selector: 'donation-suggestions',
  templateUrl: 'donation-suggestions.html',
})
export class DonationSuggestionsDialog {

  constructor(
    public dialogRef: MatDialogRef<DonationSuggestionsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
