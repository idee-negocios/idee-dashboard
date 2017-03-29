import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: 'project/:projectId',
    component: ProjectComponent,
    children: [
      {
        path: 'contacts',
        component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
