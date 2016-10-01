import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillainListComponent } from './villain-list/villain-list.component';

const appRoutes: Routes = [
  {
    path: 'villains',
    component: VillainListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
