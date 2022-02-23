import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Notes } from 'src/app/model/notes.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  note: any = {};

  @Input() notes: Notes[] = [];
  @Input() colsTemplate: TemplateRef<any>[] = [];
  @Input() headings: string[] = [];

  constructor( private notesService : NotesService) { }

  ngOnInit(): void {
  }
}
