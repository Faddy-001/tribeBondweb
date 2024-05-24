import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElectronicComponent } from './add-electronic.component';

describe('AddElectronicComponent', () => {
  let component: AddElectronicComponent;
  let fixture: ComponentFixture<AddElectronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddElectronicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
