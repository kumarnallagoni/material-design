import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  choosenEmoji: string;
  message: string;

  constructor() {
    // public dialogRef: MatDialogRef<SnackbarComponent>, @Inject(MAT_DIALOG_DATA) public data: any
    // this.snacKRef._dismissAfter(2000);
    // public dialogRef: MatDialogRef<SnackbarComponent>
    // public snackBarRef: MatSnackBarRef<SnackbarComponent>
    // this.message = this.snacKRef.containerInstance.snackBarConfig.data.message;
    // this.action = this.snackBarRef.containerInstance.snackBarConfig.data.action;
    // this.snackBarRef._dismissAfter(2000);

    // this.snackBarRef._dismissAfter(2000);
  }

  okayClick() {
    // this.dialogRef.close(this.choosenEmoji);
  }


  ngOnInit() {
    // console.log('snack bar reference', this.snackBarRef);
    // console.log('data', this.snackBarRef.containerInstance.snackBarConfig.data);
    // const message = this.snackBarRef.containerInstance.snackBarConfig.data.message;
    //
  }

}
