import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFreeGComponent } from './edit-free-g.component';

describe('EditFreeGComponent', () => {
  let component: EditFreeGComponent;
  let fixture: ComponentFixture<EditFreeGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFreeGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFreeGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
