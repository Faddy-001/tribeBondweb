import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQServiceComponent } from './edit-q-service.component';

describe('EditQServiceComponent', () => {
  let component: EditQServiceComponent;
  let fixture: ComponentFixture<EditQServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditQServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditQServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
