import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHealthComponent } from './detail-health.component';

describe('DetailHealthComponent', () => {
  let component: DetailHealthComponent;
  let fixture: ComponentFixture<DetailHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailHealthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
