import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQServiceComponent } from './add-q-service.component';

describe('AddQServiceComponent', () => {
  let component: AddQServiceComponent;
  let fixture: ComponentFixture<AddQServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddQServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddQServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
