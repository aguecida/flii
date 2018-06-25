import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  languages = new FormControl();

  languageList = ['English', 'French', 'German', 'Spanish', 'Italian'];

  seatOptions = [
    { id: 1, name: 'Window' },
    { id: 2, name: 'Middle' },
    { id: 3, name: 'Aisle' }
  ];

  seatOption = 1;

  constructor() { }

  ngOnInit() {
  }

}
