import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosqueListComponent } from './mosque-list.component';

describe('MosqueListComponent', () => {
  let component: MosqueListComponent;
  let fixture: ComponentFixture<MosqueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosqueListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MosqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
