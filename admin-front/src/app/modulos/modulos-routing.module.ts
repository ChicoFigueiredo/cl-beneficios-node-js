import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';
import { PagesComponent } from '../pages/pages.component';

const routes: Routes = [
  {
    path: '',
    children: [{
        path: 'usuario',
        component: PagesComponent,
        children: [
          {
            path: 'lista',
            component: UsuariosListaComponent,
          }
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class ModulosRoutingModule { }
