import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLivreComponent } from './pages/all-livres/all-livre.component';

const routes: Routes = [
  { path: '', component: AllLivreComponent },
  // { path: ':id', component:  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreRoutingModule {}
