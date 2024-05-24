import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntersComponent } from './volunters.component';

describe('VoluntersComponent', () => {
  let component: VoluntersComponent;
  let fixture: ComponentFixture<VoluntersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluntersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoluntersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
