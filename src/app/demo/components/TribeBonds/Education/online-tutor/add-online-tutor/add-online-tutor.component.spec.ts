import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnlineTutorComponent } from './add-online-tutor.component';

describe('AddOnlineTutorComponent', () => {
  let component: AddOnlineTutorComponent;
  let fixture: ComponentFixture<AddOnlineTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOnlineTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOnlineTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
