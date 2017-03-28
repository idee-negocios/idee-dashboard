import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CovalentCoreModule } from '@covalent/core';

import { LoginService } from './services/index';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule, CovalentCoreModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CovalentCoreModule,
    ToolbarComponent
  ],
  declarations: [ToolbarComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LoginService]
    }
  }
}
