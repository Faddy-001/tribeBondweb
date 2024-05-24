import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreeGComponent } from './add-free-g.component';

describe('AddFreeGComponent', () => {
  let component: AddFreeGComponent;
  let fixture: ComponentFixture<AddFreeGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFreeGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFreeGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
