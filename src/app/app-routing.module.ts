import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './_Components/main/main.component';
import { AccueilComponent } from './_Pages/accueil/accueil.component';
import { LivreComponent } from './_Pages/livre/livre.component';
import { ProduitsComponent } from './_Pages/produits/produits.component';

const routes: Routes = [
  { path: '', component: AccueilComponent,
  children: [
    { path: '', component: MainComponent },
    { path: 'produits', component: ProduitsComponent},
    { path: 'livre', component: LivreComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
