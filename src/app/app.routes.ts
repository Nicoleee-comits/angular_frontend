import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventario',
    pathMatch: 'full'
  },

  {
    path: 'inventario',
    loadComponent: () =>
      import('./pages/inventario/inventario.component')
      .then(m => m.InventarioComponent)
  },

  {
    path: '**',
    redirectTo: 'inventario'
  }
];
