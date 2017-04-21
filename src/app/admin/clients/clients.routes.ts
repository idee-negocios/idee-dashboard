import { Route } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';
import { ClientsManagementComponent } from './clients-management/clients-management.component';

export const routes: Route[] = [{
  path: 'clients',
  component: ClientsComponent,
  children: [
    {path: 'new', component: ClientsNewComponent},
    {path: 'management', component: ClientsManagementComponent},
    {path: '', redirectTo: 'management', pathMatch: 'full'}
  ]
}];
