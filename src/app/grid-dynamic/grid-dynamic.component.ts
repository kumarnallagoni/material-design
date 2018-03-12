import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }


  ngOnInit() {
  }


}
