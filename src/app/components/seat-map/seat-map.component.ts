import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class SeatMapComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SeatMapComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
