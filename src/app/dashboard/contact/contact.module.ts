import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
