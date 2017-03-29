import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectComponent, ContactsComponent]
})
export class ProjectModule { }
