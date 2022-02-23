import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTextNoteComponent } from './add-text-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddTextNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddTextNoteComponent
  ]
})
export class AddTextNoteModule { }
