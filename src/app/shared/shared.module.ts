import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentCoreModule } from '@covalent/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CovalentCoreModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
