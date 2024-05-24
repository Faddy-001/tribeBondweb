import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAhelpComponent } from './add-ahelp.component';

describe('AddAhelpComponent', () => {
  let component: AddAhelpComponent;
  let fixture: ComponentFixture<AddAhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAhelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
