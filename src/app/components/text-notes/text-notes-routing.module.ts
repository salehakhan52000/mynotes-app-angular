import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTextNoteComponent } from '../shared/add-text-note/add-text-note.component';
import { EditTextNoteComponent } from '../shared/edit-text-note/edit-text-note.component';
import { TextNotesComponent } from './text-notes.component';

const routes: Routes = [
  { path: '', component: TextNotesComponent },
  { path: 'add-text-note', component: AddTextNoteComponent },
  { path: 'edit-text-note/:id', component: EditTextNoteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextNotesRoutingModule {}
