import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';
import { ProjectsManagementComponent } from './projects/projects-management/projects-management.component';
import { TimeComponent } from './time/time.component';
import { CanActivateViaAuthGuard } from '../shared/guards';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        // component: HomeComponent
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        children: [
          {path: 'new', component: ProjectNewComponent},
          {path: 'management', component: ProjectsManagementComponent},
          {path: '', redirectTo: 'management', pathMatch: 'full'},
        ]
      },
      {
        path: 'time',
        component: TimeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
