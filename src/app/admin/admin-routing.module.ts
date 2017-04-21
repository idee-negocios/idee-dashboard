import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

// home
import { HomeComponent } from './home/home.component';

// projects
import { ProjectsComponent } from './projects/projects.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';
import { ProjectsManagementComponent } from './projects/projects-management/projects-management.component';

// clients
import { ClientsComponent } from './clients/clients.component';
import { ClientsNewComponent } from './clients/clients-new/clients-new.component';
import { ClientsManagementComponent } from './clients/clients-management/clients-management.component';

// time
import { TimeComponent } from './time/time.component';

// guards
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
        path: 'clients',
        component: ClientsComponent,
        children: [
          {path: 'new', component: ClientsNewComponent},
          {path: 'management', component: ClientsManagementComponent},
          {path: '', redirectTo: 'management', pathMatch: 'full'}
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
