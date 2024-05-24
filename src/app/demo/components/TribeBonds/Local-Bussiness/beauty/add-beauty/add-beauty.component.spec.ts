import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeautyComponent } from './add-beauty.component';

describe('AddBeautyComponent', () => {
  let component: AddBeautyComponent;
  let fixture: ComponentFixture<AddBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBeautyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
