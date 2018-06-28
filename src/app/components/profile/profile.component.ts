import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  midnightModeToggled(toggle: MatSlideToggleChange) {
    this.document.documentElement.className = toggle.checked ? 'flii-dark-theme' : '';
  }

}
