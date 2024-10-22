import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './pages/home/home.module';
import { NavComponent } from './main-comoponents/nav/nav.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { LogInModule } from './pages/log-in/log-in.module';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    LogInModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
