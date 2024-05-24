import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalalMeatComponent } from './halal-meat.component';

describe('HalalMeatComponent', () => {
  let component: HalalMeatComponent;
  let fixture: ComponentFixture<HalalMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalalMeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HalalMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
