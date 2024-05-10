import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTutorDetailComponent } from './online-tutor-detail.component';

describe('OnlineTutorDetailComponent', () => {
  let component: OnlineTutorDetailComponent;
  let fixture: ComponentFixture<OnlineTutorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineTutorDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineTutorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
