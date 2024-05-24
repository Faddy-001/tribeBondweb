import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLegalComponent } from './add-legal.component';

describe('AddLegalComponent', () => {
  let component: AddLegalComponent;
  let fixture: ComponentFixture<AddLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLegalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
