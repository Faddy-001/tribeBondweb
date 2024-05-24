import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeGiveawayComponent } from './free-giveaway.component';

describe('FreeGiveawayComponent', () => {
  let component: FreeGiveawayComponent;
  let fixture: ComponentFixture<FreeGiveawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeGiveawayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeGiveawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
