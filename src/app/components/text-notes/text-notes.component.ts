import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Notes } from 'src/app/model/notes.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-text-notes',
  templateUrl: './text-notes.component.html',
  styleUrls: ['./text-notes.component.css'],
})
export class TextNotesComponent implements OnInit {
  notes: Notes[] = [];
  note: any = {};
  template: TemplateRef<any>[] = [];
  showList: boolean = true;

  // @ViewChild('title', { static: true })
  // title: TemplateRef<any>;
  // @ViewChild('desc', { static: true }) desc: TemplateRef<any>;
  // @ViewChild('action', { static: true }) action: TemplateRef<any>;

  constructor(private notesService: NotesService, private router: Router) {
    // this.template.push(this.title, this.desc, this.action);
  }

  ngOnInit(): void {
    this.notesService.getTextNotesList().subscribe((notesFromFirebase) => {
      this.notes = [];
      notesFromFirebase.map((eachNote) => {
        let item: any = eachNote.payload.val();
        item.id = eachNote.payload.key;
        this.notes.push(item);
      });
    });
  }

  headings = ['Title', 'Description', 'Action'];

  getOneNote(id: any) {
    this.showList = false;
    this.notesService.getTextNoteDoc(id).subscribe((noteFromFirebase) => {
      noteFromFirebase.map((el) => {
        let key = el.payload.key;
        let value = el.payload.val();
        this.note[`${key}`] = value;
      });
      this.note['id'] = id;
    });
  }

  toggleShowList() {
    this.showList = true;
  }

  removeNote(id: any) {
    alert('Note will be deleted');
    this.notesService.deleteTextNote(id);
    this.router.navigate(['text-notes']);
  }

  editNote(id: any) {
    this.router.navigate([`text-notes/edit-text-note/${id}`]);
  }
}
