import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTutorComponent } from './online-tutor.component';

describe('OnlineTutorComponent', () => {
  let component: OnlineTutorComponent;
  let fixture: ComponentFixture<OnlineTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
