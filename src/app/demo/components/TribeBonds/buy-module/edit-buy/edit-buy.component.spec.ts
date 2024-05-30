import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuyComponent } from './edit-buy.component';

describe('EditBuyComponent', () => {
  let component: EditBuyComponent;
  let fixture: ComponentFixture<EditBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
