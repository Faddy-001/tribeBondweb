import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectronicComponent } from './edit-electronic.component';

describe('EditElectronicComponent', () => {
  let component: EditElectronicComponent;
  let fixture: ComponentFixture<EditElectronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditElectronicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
