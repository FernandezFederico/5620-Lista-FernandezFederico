import { Component } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent {
  date = new Date();
  students = [
    {
      id: 1,
      nombre: 'Federico',
      asistencia: true
    },
    {
      id: 2,
      nombre: 'Selene',
      asistencia: true
    },
    {
      id: 3,
      nombre: 'Cristian',
      asistencia: true
    },
    {
      id: 4,
      nombre: 'Lazaro',
      asistencia: true
    },
    {
      id: 5,
      nombre: 'Cristian',
      asistencia: true
    },
    {
      id: 6,
      nombre: 'Cristian',
      asistencia: true
    },
    {
      id: 7,
      nombre: 'Cristian',
      asistencia: true
    },

  ]

}
