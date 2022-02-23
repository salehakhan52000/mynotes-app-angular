import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureNotesRoutingModule } from './picture-notes-routing.module';
import { PictureNotesComponent } from './picture-notes.component';
import { ListItemsModule } from '../shared/list-items/list-items.module';
import { AddPictureNoteModule } from '../shared/add-picture-note/add-picture-note.module';
import { ListItemModule } from '../shared/list-item/list-item.module';
import { EditPictureNoteModule } from '../shared/edit-picture-note/edit-picture-note.module';


@NgModule({
  declarations: [
    PictureNotesComponent
  ],
  imports: [
    CommonModule,
    PictureNotesRoutingModule,
    ListItemsModule,
    ListItemModule,
    AddPictureNoteModule,
    EditPictureNoteModule
  ]
})
export class PictureNotesModule { }
