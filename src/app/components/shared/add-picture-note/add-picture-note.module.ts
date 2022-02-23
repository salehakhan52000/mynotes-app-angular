import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPictureNoteComponent } from './add-picture-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddPictureNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddPictureNoteModule { }
