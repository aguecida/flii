import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { RatingsComponent } from '../ratings/ratings.component';
import { ConnectComponent } from '../components/connect/connect.component';
import { StatusMessageComponent } from '../status-message/status-message.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  ratingsDialogRef: MatDialogRef<RatingsComponent, any>;
  connectDialogRef: MatDialogRef<ConnectComponent, any>;

  filters = [
    { id: 1, display: 'All' },
    { id: 2, display: 'Upcoming', icon: 'access_time' },
    { id: 3, display: 'Completed', icon: 'check' }
  ];

  statusFilter = 1;
  searchFilter = '';

  flights = [
    { id: 1, status: 2, flightNumber: 'AC360', origin: 'Toronto', destination: 'Amsterdam', date: 'June 26, 2018' },
    { id: 2, status: 3, flightNumber: 'BA157', origin: 'London', destination: 'Belize', date: 'June 22, 2018' },
    { id: 2, status: 3, flightNumber: 'AC637', origin: 'Vancouver', destination: 'Hawaii', date: 'August 5, 2017' }
  ];

  filteredFlights = this.flights;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  selectFilter(id) {
    this.statusFilter = id;
    this.applyFilters();
  }

  searchFilterChange(newValue) {
    this.searchFilter = newValue.toLowerCase();
    this.applyFilters();
  }

  applyFilters() {
    // Filter by flight status
    this.filteredFlights = this.flights.filter(flight => this.statusFilter === 1 ? true : flight.status === this.statusFilter);

    // Filter by search text
    this.filteredFlights = this.filteredFlights.filter(flight => {
      const flightNumber = flight.flightNumber.toLowerCase();
      const origin = flight.origin.toLowerCase();
      const destination = flight.destination.toLowerCase();
      return flightNumber.includes(this.searchFilter) || origin.includes(this.searchFilter) || destination.includes(this.searchFilter);
    });
  }

  isFilterSelected(id) {
    return this.statusFilter === id;
  }

  getStatusText(id) {
    return this.filters.find(filter => filter.id === id).display;
  }

  getStatusIcon(id) {
    return this.filters.find(filter => filter.id === id).icon;
  }

  ratingsAllowed(flight) {
    return flight.status !== 2;
  }

  openRatings(flight) {
    if (!this.ratingsAllowed(flight)) return;

    this.ratingsDialogRef = this.dialog.open(RatingsComponent, {
      data: flight
    });

    this.ratingsDialogRef.afterClosed().subscribe(statusMessage => {
      if (statusMessage) {
        this.snackBar.openFromComponent(StatusMessageComponent, {
          data: statusMessage
        });
      }
    });
  }

  openConnect(flight) {
    this.connectDialogRef = this.dialog.open(ConnectComponent, {
      data: flight
    });
  }

}
