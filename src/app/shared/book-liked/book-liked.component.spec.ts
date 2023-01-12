import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLikedComponent } from './book-liked.component';

describe('BookLikedComponent', () => {
  let component: BookLikedComponent;
  let fixture: ComponentFixture<BookLikedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLikedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
