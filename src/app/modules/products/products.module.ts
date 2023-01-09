import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { OneProductComponent } from './pages/one-product/one-product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [AllProductsComponent, OneProductComponent],
  imports: [ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
