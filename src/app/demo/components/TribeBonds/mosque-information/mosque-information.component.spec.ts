import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosqueInformationComponent } from './mosque-information.component';

describe('MosqueInformationComponent', () => {
  let component: MosqueInformationComponent;
  let fixture: ComponentFixture<MosqueInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosqueInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MosqueInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
