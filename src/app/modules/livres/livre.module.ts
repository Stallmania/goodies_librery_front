import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LivreRoutingModule } from './livre-routing.module';
import { LivreComponent } from './pages/livre/livre.component';

@NgModule({
  declarations: [LivreComponent],
  imports: [LivreRoutingModule, SharedModule],
})
export class LivreModule {}
