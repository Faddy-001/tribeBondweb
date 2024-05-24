import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHennaComponent } from './add-henna.component';

describe('AddHennaComponent', () => {
  let component: AddHennaComponent;
  let fixture: ComponentFixture<AddHennaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHennaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
