import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatDividerModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { FlightsComponent } from './flights/flights.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreferencesComponent,
    FlightsComponent,
    AvatarComponent
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
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
