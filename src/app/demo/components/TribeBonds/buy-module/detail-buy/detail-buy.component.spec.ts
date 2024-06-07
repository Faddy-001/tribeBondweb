import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBuyComponent } from './detail-buy.component';

describe('DetailBuyComponent', () => {
  let component: DetailBuyComponent;
  let fixture: ComponentFixture<DetailBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
