import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBeautyComponent } from './detail-beauty.component';

describe('DetailBeautyComponent', () => {
  let component: DetailBeautyComponent;
  let fixture: ComponentFixture<DetailBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBeautyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
