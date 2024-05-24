import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQServiceComponent } from './detail-q-service.component';

describe('DetailQServiceComponent', () => {
  let component: DetailQServiceComponent;
  let fixture: ComponentFixture<DetailQServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailQServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailQServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
