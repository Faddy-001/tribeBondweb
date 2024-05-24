import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeddingComponent } from './add-wedding.component';

describe('AddWeddingComponent', () => {
  let component: AddWeddingComponent;
  let fixture: ComponentFixture<AddWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWeddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
