import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { BookLikedComponent } from './book-liked/book-liked.component';

@NgModule({
  declarations: [ButtonComponent, BookLikedComponent],
  imports: [CommonModule],
  exports: [CommonModule,ButtonComponent,BookLikedComponent],
})
export class SharedModule {}
