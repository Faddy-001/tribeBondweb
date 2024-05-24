import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBeautyComponent } from './edit-beauty.component';

describe('EditBeautyComponent', () => {
  let component: EditBeautyComponent;
  let fixture: ComponentFixture<EditBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBeautyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
