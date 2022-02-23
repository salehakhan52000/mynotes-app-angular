import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-text-note',
  templateUrl: './add-text-note.component.html',
  styleUrls: ['./add-text-note.component.css']
})
export class AddTextNoteComponent implements OnInit {

  noteForm = new FormGroup ({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required)
  })

  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit(): void {
  }

  addNote() {
    this.notesService.createTextNote(this.noteForm.value);
    this.router.navigate(['text-notes']);
  }

}
