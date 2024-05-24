import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWeddingComponent } from './edit-wedding.component';

describe('EditWeddingComponent', () => {
  let component: EditWeddingComponent;
  let fixture: ComponentFixture<EditWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditWeddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
