import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTextNoteComponent } from './edit-text-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditTextNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EditTextNoteComponent
  ]
})
export class EditTextNoteModule { }
