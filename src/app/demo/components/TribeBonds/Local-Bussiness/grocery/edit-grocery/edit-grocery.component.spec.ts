import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroceryComponent } from './edit-grocery.component';

describe('EditGroceryComponent', () => {
  let component: EditGroceryComponent;
  let fixture: ComponentFixture<EditGroceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGroceryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
