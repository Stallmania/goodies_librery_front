import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponent } from './pages/livre/livre.component';

const routes: Routes = [
  // { path: '', component: AllLivreComponent },
  { path: ':id', component: LivreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreRoutingModule {}
