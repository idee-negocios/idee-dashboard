import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { contactRoutes } from './contact/contact-routing.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      ...contactRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
