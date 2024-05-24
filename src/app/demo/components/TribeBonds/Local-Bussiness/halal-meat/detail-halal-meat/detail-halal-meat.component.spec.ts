import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHalalMeatComponent } from './detail-halal-meat.component';

describe('DetailHalalMeatComponent', () => {
  let component: DetailHalalMeatComponent;
  let fixture: ComponentFixture<DetailHalalMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailHalalMeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailHalalMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
