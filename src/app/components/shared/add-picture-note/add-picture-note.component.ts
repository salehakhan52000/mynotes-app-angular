import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-picture-note',
  templateUrl: './add-picture-note.component.html',
  styleUrls: ['./add-picture-note.component.css'],
})
export class AddPictureNoteComponent implements OnInit {
  noteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    image: new FormControl('')
  });

  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit(): void {}

  addNote() {
    this.notesService.createPictureNote(this.noteForm.value);
    this.router.navigate(['picture-notes']);
  }
}
