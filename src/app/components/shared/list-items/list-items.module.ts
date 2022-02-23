import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './list-items.component';



@NgModule({
  declarations: [
    ListItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemsComponent
  ]
})
export class ListItemsModule { }
