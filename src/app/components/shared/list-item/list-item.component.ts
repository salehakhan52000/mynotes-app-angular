import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  // note: any = {};
  showImg:boolean = false;

  @Input() note: any = {};
  @Input() notetemplate: TemplateRef<any>[] = [];
  @Input() headings: string[] = [];

  constructor(private notesService: NotesService, private activeroute: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {}  

  redirectToNotes() {
    this.location.back();
  }
}
