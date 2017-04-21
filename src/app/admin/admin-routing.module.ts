import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

// routes
import { HomeComponent } from './home/home.component';

import { routes as projectRoutes } from './projects/projects.routes';
import { routes as clientRoutes } from './clients/clients.routes';
import { routes as timeRoutes } from './time/time.routes';

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
      ...projectRoutes,
      ...clientRoutes,
      ...timeRoutes,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
