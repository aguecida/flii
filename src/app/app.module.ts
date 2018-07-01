import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
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
import { SeatMapComponent } from './components/seat-map/seat-map.component';

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
    SettingsComponent,
    SeatMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    RatingsComponent,
    ConnectComponent,
    SeatMapComponent,
    StatusMessageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
