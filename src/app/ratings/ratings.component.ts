import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  selectedStar: number = null;

  stars = [
    { number: 1, icon: 'star_border', selected: false },
    { number: 2, icon: 'star_border', selected: false },
    { number: 3, icon: 'star_border', selected: false },
    { number: 4, icon: 'star_border', selected: false },
    { number: 5, icon: 'star_border', selected: false }
  ];

  constructor(public dialogRef: MatDialogRef<RatingsComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  hoverStar(hoveredStar) {
    this.stars.forEach(star => {
      if (star.number <= hoveredStar || star.selected) {
        star.icon = 'star';
      }
      else {
        star.icon = 'star_border';
      }
    });
  }

  unhoverStar() {
    this.stars.forEach(star => {
      star.icon = star.selected ? 'star' : 'star_border';
    });
  }

  selectStar(selectedStar) {
    this.selectedStar = selectedStar;

    this.stars.forEach(star => {
      if (star.number <= selectedStar) {
        star.selected = true;
        star.icon = 'star';
      }
      else {
        star.selected = false;
        star.icon = 'star_border';
      }
    });
  }

  starsSelected() {
    return !this.stars.some(star => star.selected);
  }

}
