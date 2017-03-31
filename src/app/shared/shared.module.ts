import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CovalentCoreModule } from '@covalent/core';

import { LoginService, ProjectService } from './services/index';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, CovalentCoreModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CovalentCoreModule,
    ToolbarComponent,
    PageNotFoundComponent,
    SidenavComponent
  ],
  declarations: [ToolbarComponent, PageNotFoundComponent, SidenavComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LoginService, ProjectService]
    }
  }
}
