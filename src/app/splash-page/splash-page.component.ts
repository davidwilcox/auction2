import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent implements OnInit {



  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  showIdeas() {
    this._dialog.open(DonationSuggestionsDialogSplash, {
    });  
  }
}

@Component({
  selector: 'donation-suggestions-splash',
  templateUrl: '../donate-item/donate-item/donation-suggestions.html',
})
export class DonationSuggestionsDialogSplash {

  constructor(
    public dialogRef: MatDialogRef<DonationSuggestionsDialogSplash>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
