import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-edit-text-note',
  templateUrl: './edit-text-note.component.html',
  styleUrls: ['./edit-text-note.component.css'],
})
export class EditTextNoteComponent implements OnInit {
  note: any = {};
  public noteForm: FormGroup;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  id = this.activeRoute.snapshot.params.id;

  ngOnInit(): void {
    this.notesService.getTextNoteDoc(this.id).subscribe((noteFromFirebase) => {
      noteFromFirebase.map((el) => {
        let key = el.payload.key;
        let value = el.payload.val();
        this.note[`${key}`] = value;
      });
      this.noteForm = this.formBuilder.group({
        title: [this.note.title],
        desc: [this.note.desc],
      });
    });
  }

  editNote() {
    this.notesService.updateTextNote(this.noteForm.value, this.id);
    this.router.navigate(['text-notes']);
  }
}
