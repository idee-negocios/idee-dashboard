import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CovalentCoreModule } from '@covalent/core';

import { LoginService, ProjectService } from './services';
import { CanActivateViaAuthGuard } from './guards';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, CovalentCoreModule
  ],
  exports: [
    // Angular modules
    CommonModule,
    ReactiveFormsModule,
    // Extra modules
    CovalentCoreModule,
    // Components
    ToolbarComponent,
    PageNotFoundComponent,
  ],
  declarations: [ToolbarComponent, PageNotFoundComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LoginService,
        CanActivateViaAuthGuard,
        ProjectService
      ]
    }
  }
}
