import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { OneProductComponent } from './pages/one-product/one-product.component';

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: ':id', component: OneProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
