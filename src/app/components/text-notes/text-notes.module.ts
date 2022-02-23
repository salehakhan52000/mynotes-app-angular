import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextNotesRoutingModule } from './text-notes-routing.module';
import { TextNotesComponent } from './text-notes.component';
import { ListItemsModule } from '../shared/list-items/list-items.module';
import { ListItemModule } from '../shared/list-item/list-item.module';
import { AddTextNoteModule } from '../shared/add-text-note/add-text-note.module';
import { EditTextNoteModule } from '../shared/edit-text-note/edit-text-note.module';

@NgModule({
  declarations: [TextNotesComponent],
  imports: [
    CommonModule,
    TextNotesRoutingModule,
    ListItemsModule,
    ListItemModule,
    AddTextNoteModule,
    EditTextNoteModule
  ],
})
export class TextNotesModule {}
