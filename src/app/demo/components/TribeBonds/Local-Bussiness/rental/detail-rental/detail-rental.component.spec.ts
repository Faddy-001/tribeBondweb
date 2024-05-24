import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRentalComponent } from './detail-rental.component';

describe('DetailRentalComponent', () => {
  let component: DetailRentalComponent;
  let fixture: ComponentFixture<DetailRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
