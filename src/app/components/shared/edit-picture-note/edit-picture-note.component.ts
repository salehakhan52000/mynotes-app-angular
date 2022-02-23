import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-edit-picture-note',
  templateUrl: './edit-picture-note.component.html',
  styleUrls: ['./edit-picture-note.component.css']
})
export class EditPictureNoteComponent implements OnInit {
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
      img:['']
    });
  }

  id = this.activeRoute.snapshot.params.id;

  ngOnInit(): void {
    this.notesService.getPictureNoteDoc(this.id).subscribe((noteFromFirebase) => {
      noteFromFirebase.map((el) => {
        let key = el.payload.key;
        let value = el.payload.val();
        this.note[`${key}`] = value;
      });
      this.noteForm = this.formBuilder.group({
        title: [this.note.title],
        desc: [this.note.desc],
        img: [this.note.img]
      });
    });
  }

  editNote() {
    this.notesService.updatePictureNote(this.noteForm.value, this.id);
    this.router.navigate(['picture-notes']);
  }

}
