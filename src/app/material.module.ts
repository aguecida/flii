import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { MatRadioModule, MatSelectModule, MatSlideToggleModule, MatCardModule } from '@angular/material';
import { MatDividerModule, MatDialogModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatSnackBarModule, MatTabsModule, MatSliderModule, MatDatepickerModule } from '@angular/material';
import { MatIconModule, MatMenuModule, MatTooltipModule, MatInputModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000, horizontalPosition: 'left' }}
  ],
  declarations: []
})
export class MaterialModule { }
