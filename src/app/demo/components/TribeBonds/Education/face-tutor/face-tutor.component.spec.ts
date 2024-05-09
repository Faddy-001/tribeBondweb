import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceTutorComponent } from './face-tutor.component';

describe('FaceTutorComponent', () => {
  let component: FaceTutorComponent;
  let fixture: ComponentFixture<FaceTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaceTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
