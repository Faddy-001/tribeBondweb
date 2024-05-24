import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHennaComponent } from './detail-henna.component';

describe('DetailHennaComponent', () => {
  let component: DetailHennaComponent;
  let fixture: ComponentFixture<DetailHennaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailHennaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailHennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
