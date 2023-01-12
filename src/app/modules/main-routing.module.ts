import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./acceuil/acceuil.module').then((m) => m.AcceuilModule),
  },
  {
    path: 'acceuil',
    loadChildren: () =>
      import('./acceuil/acceuil.module').then((m) => m.AcceuilModule),
  },
  {
    path: 'livres',
    loadChildren: () =>
      import('./livres/livre.module').then((m) => m.LivreModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
