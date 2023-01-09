import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './pages/acceuil.component';

@NgModule({
  declarations: [AcceuilComponent],
  imports: [AcceuilRoutingModule, SharedModule],
})
export class AcceuilModule {}
