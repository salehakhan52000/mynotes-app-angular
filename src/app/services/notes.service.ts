import { Injectable } from '@angular/core';
import {
  AngularFireAction,
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';
import { Notes, PictureNotes } from '../model/notes.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private db: AngularFireDatabase) {}

  getTextNotesList() {
    return this.db.list('textNotes').snapshotChanges();
  }

  getTextNoteDoc(id: any) {
    return this.db.list(`textNotes/${id}`).snapshotChanges();
  }

  createTextNote(note: Notes) {
    return new Promise((resolve, reject) => {
      this.db
        .list('textNotes')
        .push(note)
        .then((response) => console.log(response))
        .catch((error) => reject(error));
    });
  }

  deleteTextNote(id: any) {
    return new Promise((resole, reject) => {
      this.db
        .list(`textNotes/${id}`)
        .remove()
        .then((response) => console.log(response))
        .catch((error) => reject(error));
    });
  }

  updateTextNote(note: Notes, id: any) {
    return new Promise((resole, reject) => {
      this.db
        .list(`textNotes`)
        .update(id, note)
        .then((response) => console.log(response))
        .catch((error) => reject(error));
    });
  }


  getPictureNotesList() {
    return this.db.list('pictureNotes').snapshotChanges();
  }

  getPictureNoteDoc(id: any) {
    return this.db.list(`pictureNotes/${id}`).snapshotChanges();
  }

  createPictureNote(note: PictureNotes) {
    return new Promise((resolve, reject) => {
      this.db
        .list('pictureNotes')
        .push(note)
        .then((response) => console.log(response))
        .catch((error) => reject(error));
    });
  }

  deletePictureNote(id: any) {
    return new Promise((resole, reject) => {
      this.db
        .list(`pictureNotes/${id}`)
        .remove()
        .then((response) => console.log(response))
        .catch((error) => reject(error));
    });
  }

  updatePictureNote(note: PictureNotes, id:any) {
    return new Promise((resole, reject) => {
      this.db
        .list(`pictureNotes`)
        .update(id, note)
        .then((response) => console.log(response))
        .catch((error) => reject(error));
    });
  }
}
