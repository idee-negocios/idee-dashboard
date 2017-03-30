import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { ProjectModule } from './project/project.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProjectModule,
    AdminModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
