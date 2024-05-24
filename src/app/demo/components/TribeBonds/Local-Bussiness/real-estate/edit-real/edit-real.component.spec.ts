import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRealComponent } from './edit-real.component';

describe('EditRealComponent', () => {
  let component: EditRealComponent;
  let fixture: ComponentFixture<EditRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
