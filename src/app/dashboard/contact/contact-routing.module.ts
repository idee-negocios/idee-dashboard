import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

export const contactRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
//   providers: []
// })
// export class ContactRoutingModule { }
