import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentCoreModule } from '@covalent/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule, CovalentCoreModule
  ],
  exports: [
    CovalentCoreModule,
    SidenavComponent,
    ToolbarComponent
  ],
  declarations: [SidenavComponent, ToolbarComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
