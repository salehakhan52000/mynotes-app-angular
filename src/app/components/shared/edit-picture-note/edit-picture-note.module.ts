import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPictureNoteComponent } from './edit-picture-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditPictureNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EditPictureNoteComponent
  ]
})
export class EditPictureNoteModule { }
