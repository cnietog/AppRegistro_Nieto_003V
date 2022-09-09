import { Component } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirecTo: string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'walk-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },

    {
      icon: 'person-outline',
      name: 'Perfil',
      redirecTo: '/perfil'
    },

    {
      icon: 'library-outline',
      name: 'Alumno',
      redirecTo: '/alumno'
    },

    {
      icon: 'clipboard-outline',
      name: 'Docente',
      redirecTo: '/docente'
    },

    {
      icon: 'key-outline',
      name: 'Login',
      redirecTo: '/login'
    },

    {
      icon: 'layers-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },

    {
      icon: 'reader-outline',
      name: 'Asistencia',
      redirecTo: '/asistencias'
    },
  ];

}
