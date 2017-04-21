import { Route } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectsManagementComponent } from './projects-management/projects-management.component';

export const routes: Route[] = [
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {path: 'new', component: ProjectNewComponent},
      {path: 'management', component: ProjectsManagementComponent},
      {path: '', redirectTo: 'management', pathMatch: 'full'}
    ]
  }
];
