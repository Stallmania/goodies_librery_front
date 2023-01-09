import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  // { path: ':id', component:  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilRoutingModule {}
