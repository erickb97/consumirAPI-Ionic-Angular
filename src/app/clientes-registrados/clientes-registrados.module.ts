import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientesRegistradosPage } from './clientes-registrados.page';
import { AppComponent } from '../app.component';
import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ClientesRegistradosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [ClientesRegistradosPage]
})
export class ClientesRegistradosPageModule {
  
}
