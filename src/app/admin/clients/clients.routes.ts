import { Route } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientsManagementComponent } from './clients-management/clients-management.component';

export const routes: Route[] = [{
  path: 'clients',
  component: ClientsComponent,
  children: [
    {path: 'new', component: ClientNewComponent},
    {path: 'management', component: ClientsManagementComponent},
    {path: '', redirectTo: 'management', pathMatch: 'full'}
  ]
}];
