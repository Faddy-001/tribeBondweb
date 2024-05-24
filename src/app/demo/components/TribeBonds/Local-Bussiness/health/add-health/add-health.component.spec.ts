import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHealthComponent } from './add-health.component';

describe('AddHealthComponent', () => {
  let component: AddHealthComponent;
  let fixture: ComponentFixture<AddHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHealthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
