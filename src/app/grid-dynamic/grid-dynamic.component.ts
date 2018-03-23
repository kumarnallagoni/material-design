import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SnackbarComponent} from '../snackbar/snackbar.component';

@Component({
  selector: 'app-grid-dynamic',
  templateUrl: './grid-dynamic.component.html',
  styleUrls: ['./grid-dynamic.component.css']
})
export class GridDynamicComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(public snackBar: MatSnackBar) {
  }

  openSnackBar() {
    // this.snackBar.open('You liked the post', 'Ok', {duration: 2000});
    this.snackBar.openFromComponent(SnackbarComponent, {data: {message: 'snack bar data'}});
  }

  /* openDialog() {
     const emojis = ['🐼', '💪', '🐷', '🤖', '👽', '🐥'];
     const dialog = this.dialogRef.open(SnackbarComponent, {width: '500px', data: {emojis: emojis}});
     dialog.disableClose = true;
     console.log('dialog Id', dialog.id);
     dialog.afterClosed().subscribe(data => {
       this.selectedEmoji = data;
     });
   }*/

  /*openSnackBar() {
    this.snackBar.open('You Liked the post 🍕', 'Ok');
  }*/
  /*openSnackBar() {
    const s = new MatSnackBarConfig();
    s.data = {
      message : 'you liked the pic',
      action: 'ok',
      duration: 1000
    }
    const snackBarConfig = this.snackBar.openFromComponent(SnackbarComponent, s);
    const snackBarConfig = this.snackBar.openFromComponent(SnackbarComponent, {data: 'thank you'});
  }*/

  /* openSnackBar() {
     this.snackBar.openFromComponent(SnackbarComponent, {duration: 1000 , horizontalPosition: 'right'});
   }*/

  /*openDialog() {
    const dialogRef = this.dialog.open(SnackbarComponent, {width: '500px'});
     const emojis = ['🐼', '💪', '🐷', '🤖', '👽', '🐥'];
     const dialog = this.dialogRef.open(SnackbarComponent, {width: '500px', data: {emojis: emojis}});
    dialog.disableClose = true;
    console.log('id', dialogRef.id);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedEmoji = result;
      console.log('result', result);
    });
  }*/


  ngOnInit() {
  }


}
