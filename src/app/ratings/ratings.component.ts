import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RatingsComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
