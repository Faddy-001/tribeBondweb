import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAhelpComponent } from './detail-ahelp.component';

describe('DetailAhelpComponent', () => {
  let component: DetailAhelpComponent;
  let fixture: ComponentFixture<DetailAhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailAhelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailAhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
