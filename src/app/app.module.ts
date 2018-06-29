import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatDividerModule, MatDialogModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule, MatInputModule } from '@angular/material';
import { MatSnackBarModule, MatTabsModule, MatSliderModule } from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HomeComponent } from './components/home/home.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { ConnectComponent } from './components/connect/connect.component';
import { StatusMessageComponent } from './components/status-message/status-message.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreferencesComponent,
    FlightsComponent,
    HomeComponent,
    RatingsComponent,
    ConnectComponent,
    StatusMessageComponent,
    SettingsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatSliderModule
  ],
  entryComponents: [
    RatingsComponent,
    ConnectComponent,
    StatusMessageComponent
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000, horizontalPosition: 'left' }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
