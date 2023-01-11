import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent],
  imports: [SharedModule, RouterModule],
})
export class LayoutModule {}
