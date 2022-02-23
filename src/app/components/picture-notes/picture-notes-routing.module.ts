import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPictureNoteComponent } from '../shared/add-picture-note/add-picture-note.component';
import { EditPictureNoteComponent } from '../shared/edit-picture-note/edit-picture-note.component';
import { PictureNotesComponent } from './picture-notes.component';

const routes: Routes = [
  { path: '', component: PictureNotesComponent },
  { path: 'add-picture-note', component: AddPictureNoteComponent },
  { path: 'edit-picture-note/:id', component: EditPictureNoteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PictureNotesRoutingModule {}
