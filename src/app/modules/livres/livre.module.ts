import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LivreRoutingModule } from './livre-routing.module';
import { AllLivreComponent } from './pages/all-livres/all-livre.component';

@NgModule({
  declarations: [AllLivreComponent],
  imports: [LivreRoutingModule, SharedModule],
})
export class LivreModule {}
