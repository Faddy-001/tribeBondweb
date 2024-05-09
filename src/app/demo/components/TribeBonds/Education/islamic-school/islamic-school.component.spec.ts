import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicSchoolComponent } from './islamic-school.component';

describe('IslamicSchoolComponent', () => {
  let component: IslamicSchoolComponent;
  let fixture: ComponentFixture<IslamicSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IslamicSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IslamicSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
