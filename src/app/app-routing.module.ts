import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './_Pages/accueil/accueil.component';
import { ProduitsComponent } from './_Pages/produits/produits.component';

const routes: Routes = [
  { path: '', component: AccueilComponent,
  children: [
    { path: 'produits', component: ProduitsComponent},
/*     {path: '', component: PageXComponent }, */
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
