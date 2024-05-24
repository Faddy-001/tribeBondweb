import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVolunterComponent } from './detail-volunter.component';

describe('DetailVolunterComponent', () => {
  let component: DetailVolunterComponent;
  let fixture: ComponentFixture<DetailVolunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailVolunterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailVolunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
