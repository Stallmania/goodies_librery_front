import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
