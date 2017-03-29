import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SummaryRoutingModule
  ],
  declarations: [SummaryComponent, ProjectsComponent]
})
export class SummaryModule { }
