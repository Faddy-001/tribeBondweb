import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRealComponent } from './detail-real.component';

describe('DetailRealComponent', () => {
  let component: DetailRealComponent;
  let fixture: ComponentFixture<DetailRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
