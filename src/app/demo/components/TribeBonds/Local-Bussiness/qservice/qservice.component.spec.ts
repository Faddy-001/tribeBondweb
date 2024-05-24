import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QserviceComponent } from './qservice.component';

describe('QserviceComponent', () => {
  let component: QserviceComponent;
  let fixture: ComponentFixture<QserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
