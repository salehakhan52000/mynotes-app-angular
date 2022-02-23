import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { PictureNotes } from 'src/app/model/notes.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-picture-notes',
  templateUrl: './picture-notes.component.html',
  styleUrls: ['./picture-notes.component.css']
})
export class PictureNotesComponent implements OnInit {
  notes: PictureNotes[] = [];
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
    this.notesService.getPictureNotesList().subscribe((notesFromFirebase) => {
      this.notes = [];
      notesFromFirebase.map((eachNote) => {
        let item: any = eachNote.payload.val();
        item.id = eachNote.payload.key;
        this.notes.push(item);
      });
    });
  }

  headings = ['Title', 'Description', 'Image', 'Action'];

  getOneNote(id: any) {
    this.showList = false;
    this.notesService.getPictureNoteDoc(id).subscribe((noteFromFirebase) => {
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
    this.notesService.deletePictureNote(id);
    this.router.navigate(['picture-notes']);
  }

  editNote(id: any) {
    this.router.navigate([`picture-notes/edit-picture-note/${id}`])
  }

}
