import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferencesComponent } from './preferences/preferences.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/preferences',
    pathMatch: 'full'
  },
  {
    path: 'preferences',
    component: PreferencesComponent
  },
  {
    path: 'flights',
    component: FlightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
