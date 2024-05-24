import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAhelpComponent } from './edit-ahelp.component';

describe('EditAhelpComponent', () => {
  let component: EditAhelpComponent;
  let fixture: ComponentFixture<EditAhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAhelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
