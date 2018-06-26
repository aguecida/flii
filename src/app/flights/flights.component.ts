import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  filters = [
    { id: 1, display: 'All' },
    { id: 2, display: 'Upcoming', icon: 'access_time' },
    { id: 3, display: 'Completed', icon: 'check' }
  ];

  selectedFilterId = 1;

  flights = [
    { id: 1, status: 2, flightNumber: 'AC360', origin: 'Toronto', destination: 'Amsterdam', date: 'June 26, 2018' },
    { id: 2, status: 3, flightNumber: 'BA157', origin: 'London', destination: 'Belize', date: 'June 22, 2018' },
    { id: 2, status: 3, flightNumber: 'AC637', origin: 'Vancouver', destination: 'Hawaii', date: 'August 5, 2017' }
  ];

  filteredFlights = this.flights;

  constructor() { }

  ngOnInit() {
  }

  selectFilter(id) {
    this.selectedFilterId = id;
    this.filteredFlights = this.flights.filter(flight => id === 1 ? true : flight.status === id);
  }

  isFilterSelected(id) {
    return this.selectedFilterId === id;
  }

  getStatusText(id) {
    return this.filters.find(filter => filter.id === id).display;
  }

  getStatusIcon(id) {
    return this.filters.find(filter => filter.id === id).icon;
  }

}
