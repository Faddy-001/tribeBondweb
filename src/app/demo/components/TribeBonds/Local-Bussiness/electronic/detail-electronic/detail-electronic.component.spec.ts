import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailElectronicComponent } from './detail-electronic.component';

describe('DetailElectronicComponent', () => {
  let component: DetailElectronicComponent;
  let fixture: ComponentFixture<DetailElectronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailElectronicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
