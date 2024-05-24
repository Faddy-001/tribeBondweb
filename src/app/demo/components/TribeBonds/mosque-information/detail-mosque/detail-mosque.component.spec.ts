import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMosqueComponent } from './detail-mosque.component';

describe('DetailMosqueComponent', () => {
  let component: DetailMosqueComponent;
  let fixture: ComponentFixture<DetailMosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMosqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailMosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
