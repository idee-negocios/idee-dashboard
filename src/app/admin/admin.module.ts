import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

// home
import { HomeComponent } from './home/home.component';

// projects
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsManagementComponent } from './projects/projects-management/projects-management.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';

// time
import { TimeComponent } from './time/time.component';

// clients
import { ClientsComponent } from './clients/clients.component';
import { ClientNewComponent } from './clients/client-new/client-new.component';
import { ClientsManagementComponent } from './clients/clients-management/clients-management.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    ProjectsComponent,
    ProjectsManagementComponent,
    ProjectNewComponent,
    HomeComponent,
    TimeComponent,
    ClientsComponent,
    ClientNewComponent,
    ClientsManagementComponent
  ]
})
export class AdminModule { }
