import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';



@NgModule({
  declarations: [
    StudentsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentsListComponent
  ]
})
export class StudentsModule { }
