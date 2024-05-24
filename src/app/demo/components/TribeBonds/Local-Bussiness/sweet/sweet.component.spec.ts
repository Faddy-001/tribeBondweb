import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetComponent } from './sweet.component';

describe('SweetComponent', () => {
  let component: SweetComponent;
  let fixture: ComponentFixture<SweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
