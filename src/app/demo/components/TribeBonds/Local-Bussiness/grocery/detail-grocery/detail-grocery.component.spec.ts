import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGroceryComponent } from './detail-grocery.component';

describe('DetailGroceryComponent', () => {
  let component: DetailGroceryComponent;
  let fixture: ComponentFixture<DetailGroceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailGroceryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
