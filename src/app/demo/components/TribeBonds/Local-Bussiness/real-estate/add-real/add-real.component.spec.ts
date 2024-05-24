import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRealComponent } from './add-real.component';

describe('AddRealComponent', () => {
  let component: AddRealComponent;
  let fixture: ComponentFixture<AddRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
