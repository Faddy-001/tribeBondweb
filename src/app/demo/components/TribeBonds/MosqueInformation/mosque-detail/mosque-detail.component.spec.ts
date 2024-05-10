import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosqueDetailComponent } from './mosque-detail.component';

describe('MosqueDetailComponent', () => {
  let component: MosqueDetailComponent;
  let fixture: ComponentFixture<MosqueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosqueDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MosqueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
