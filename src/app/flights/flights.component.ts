import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  selectedFilterId = 1;
  filters = [
    { id: 1, display: 'All' },
    { id: 2, display: 'Upcoming' },
    { id: 3, display: 'Completed' }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectFilter(id) {
    this.selectedFilterId = id;
  }

  isFilterSelected(id) {
    return this.selectedFilterId === id;
  }

}
