import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVolunterComponent } from './edit-volunter.component';

describe('EditVolunterComponent', () => {
  let component: EditVolunterComponent;
  let fixture: ComponentFixture<EditVolunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVolunterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVolunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
