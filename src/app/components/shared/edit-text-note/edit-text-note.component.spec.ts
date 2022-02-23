import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextNoteComponent } from './edit-text-note.component';

describe('EditTextNoteComponent', () => {
  let component: EditTextNoteComponent;
  let fixture: ComponentFixture<EditTextNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTextNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
