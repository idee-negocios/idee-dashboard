import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';
import { ProjectsManagementComponent } from './projects/projects-management/projects-management.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent,
        children: [
          {path: 'new', component: ProjectNewComponent},
          {path: 'management', component: ProjectsManagementComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
