import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFreeGComponent } from './detail-free-g.component';

describe('DetailFreeGComponent', () => {
  let component: DetailFreeGComponent;
  let fixture: ComponentFixture<DetailFreeGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFreeGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailFreeGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
