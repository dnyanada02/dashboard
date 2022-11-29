import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LeadDashboardComponent } from './lead-dashboard/lead-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AllLeadsComponent } from './all-leads/all-leads.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeadDashboardComponent,
    NavbarComponent,
    SidenavComponent,
    AllLeadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
