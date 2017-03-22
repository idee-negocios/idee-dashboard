import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentCoreModule } from '@covalent/core';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule, CovalentCoreModule
  ],
  exports: [
    CovalentCoreModule,
    ToolbarComponent
  ],
  declarations: [ToolbarComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
