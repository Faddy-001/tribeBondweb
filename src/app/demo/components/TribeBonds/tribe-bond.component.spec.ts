import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribeBondComponent } from './tribe-bond.component';

describe('TribeBondComponent', () => {
  let component: TribeBondComponent;
  let fixture: ComponentFixture<TribeBondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TribeBondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TribeBondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
