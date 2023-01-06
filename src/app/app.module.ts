import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_Components/header/header.component';
import { MainComponent } from './_Components/main/main.component';
import { FooterComponent } from './_Components/footer/footer.component';
import { ProduitsComponent } from './_Pages/produits/produits.component';
import { AccueilComponent } from './_Pages/accueil/accueil.component';
import { MainProductsComponent } from './_Components/main-products/main-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProduitsComponent,
    AccueilComponent,
    MainProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
