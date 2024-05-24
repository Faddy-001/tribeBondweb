import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLegalComponent } from './detail-legal.component';

describe('DetailLegalComponent', () => {
  let component: DetailLegalComponent;
  let fixture: ComponentFixture<DetailLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailLegalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
