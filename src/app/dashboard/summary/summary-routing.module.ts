import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryComponent } from './summary.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: 'summary',
    component: SummaryComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
