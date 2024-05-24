import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHalalMeatComponent } from './add-halal-meat.component';

describe('AddHalalMeatComponent', () => {
  let component: AddHalalMeatComponent;
  let fixture: ComponentFixture<AddHalalMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHalalMeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHalalMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
