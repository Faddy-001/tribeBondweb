import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMosqueComponent } from './add-mosque.component';

describe('AddMosqueComponent', () => {
  let component: AddMosqueComponent;
  let fixture: ComponentFixture<AddMosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMosqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
