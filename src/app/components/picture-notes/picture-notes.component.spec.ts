import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureNotesComponent } from './picture-notes.component';

describe('PictureNotesComponent', () => {
  let component: PictureNotesComponent;
  let fixture: ComponentFixture<PictureNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
