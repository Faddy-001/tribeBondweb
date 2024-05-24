import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHouseholdComponent } from './detail-household.component';

describe('DetailHouseholdComponent', () => {
  let component: DetailHouseholdComponent;
  let fixture: ComponentFixture<DetailHouseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailHouseholdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
