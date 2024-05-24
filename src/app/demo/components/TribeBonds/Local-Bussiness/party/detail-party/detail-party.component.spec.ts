import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartyComponent } from './detail-party.component';

describe('DetailPartyComponent', () => {
  let component: DetailPartyComponent;
  let fixture: ComponentFixture<DetailPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPartyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
