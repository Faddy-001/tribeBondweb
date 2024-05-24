import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HennaServiceComponent } from './henna-service.component';

describe('HennaServiceComponent', () => {
  let component: HennaServiceComponent;
  let fixture: ComponentFixture<HennaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HennaServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HennaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
