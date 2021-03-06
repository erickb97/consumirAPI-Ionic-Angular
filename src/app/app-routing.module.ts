import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'clientes-registrados', loadChildren: './clientes-registrados/clientes-registrados.module#ClientesRegistradosPageModule' },
  { path: 'pagos', loadChildren: './pagos/pagos.module#PagosPageModule' },
  { path: 'newcredito', loadChildren: './newcredito/newcredito.module#NewcreditoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
