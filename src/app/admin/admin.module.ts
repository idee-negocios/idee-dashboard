import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsManagementComponent } from './projects/projects-management/projects-management.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, ProjectsComponent, ProjectsManagementComponent, ProjectNewComponent, HomeComponent]
})
export class AdminModule { }
