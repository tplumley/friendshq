import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent, PersonListComponent, ShowPersonComponent } from './people';
import { FriendsService } from './shared';
import { DashboardComponent } from './dashboard';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonListComponent,
    ShowPersonComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [FriendsService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
