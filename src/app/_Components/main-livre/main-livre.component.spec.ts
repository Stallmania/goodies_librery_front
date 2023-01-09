import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLivreComponent } from './main-livre.component';

describe('MainLivreComponent', () => {
  let component: MainLivreComponent;
  let fixture: ComponentFixture<MainLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
