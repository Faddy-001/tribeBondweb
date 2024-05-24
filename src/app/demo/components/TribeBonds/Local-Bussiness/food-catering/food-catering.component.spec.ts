import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCateringComponent } from './food-catering.component';

describe('FoodCateringComponent', () => {
  let component: FoodCateringComponent;
  let fixture: ComponentFixture<FoodCateringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodCateringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
