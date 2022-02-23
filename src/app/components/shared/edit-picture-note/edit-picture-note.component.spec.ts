import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPictureNoteComponent } from './edit-picture-note.component';

describe('EditPictureNoteComponent', () => {
  let component: EditPictureNoteComponent;
  let fixture: ComponentFixture<EditPictureNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPictureNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPictureNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
