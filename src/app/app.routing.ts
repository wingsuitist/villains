import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillainListComponent } from './villain-list/villain-list.component';
import { PowersComponent } from './powers/powers.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'villains',
    pathMatch: 'full'
  },
  {
    path: 'powers',
    component: PowersComponent
  },
  {
    path: 'villain/:id',
    component: VillainListComponent
  },
  {
    path: 'villains',
    component: VillainListComponent
  },
  {
    path: '**',
    component: VillainListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
