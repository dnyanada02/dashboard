import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLeadsComponent } from './all-leads/all-leads.component';
import { LeadDashboardComponent } from './lead-dashboard/lead-dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"leadDash", component:LeadDashboardComponent},
  {path:"allLeads", component:AllLeadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
