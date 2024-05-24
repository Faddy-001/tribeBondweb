import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHennaComponent } from './edit-henna.component';

describe('EditHennaComponent', () => {
  let component: EditHennaComponent;
  let fixture: ComponentFixture<EditHennaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHennaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditHennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
