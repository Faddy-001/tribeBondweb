import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSweetComponent } from './detail-sweet.component';

describe('DetailSweetComponent', () => {
  let component: DetailSweetComponent;
  let fixture: ComponentFixture<DetailSweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailSweetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
