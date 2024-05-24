import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWeddingComponent } from './detail-wedding.component';

describe('DetailWeddingComponent', () => {
  let component: DetailWeddingComponent;
  let fixture: ComponentFixture<DetailWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailWeddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
