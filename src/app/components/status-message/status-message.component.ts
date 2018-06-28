import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

import { StatusMessage } from '../../models/status-message';

@Component({
  selector: 'app-status-message',
  templateUrl: './status-message.component.html',
  styleUrls: ['./status-message.component.scss']
})
export class StatusMessageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: StatusMessage) { }

  ngOnInit() {
  }

}
