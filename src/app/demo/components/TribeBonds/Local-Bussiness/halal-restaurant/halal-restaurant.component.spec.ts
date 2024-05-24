import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalalRestaurantComponent } from './halal-restaurant.component';

describe('HalalRestaurantComponent', () => {
  let component: HalalRestaurantComponent;
  let fixture: ComponentFixture<HalalRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalalRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HalalRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
