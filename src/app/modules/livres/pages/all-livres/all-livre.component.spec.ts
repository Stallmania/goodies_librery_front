import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLivreComponent } from './all-livre.component';

describe('AllLivreComponent', () => {
  let component: AllLivreComponent;
  let fixture: ComponentFixture<AllLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllLivreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
