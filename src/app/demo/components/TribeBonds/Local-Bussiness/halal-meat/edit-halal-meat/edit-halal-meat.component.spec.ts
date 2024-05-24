import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHalalMeatComponent } from './edit-halal-meat.component';

describe('EditHalalMeatComponent', () => {
  let component: EditHalalMeatComponent;
  let fixture: ComponentFixture<EditHalalMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHalalMeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditHalalMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
