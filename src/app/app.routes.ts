import { DashboardComponent } from "./dashboard/dashboard.component";
import { PeopleComponent } from "./people/people.component";

import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'people', component: PeopleComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'},

];