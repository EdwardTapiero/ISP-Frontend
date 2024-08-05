import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class listLayoutComponent {

  // Define la propiedad hidden
  hidden: boolean = true;

  items = [
    { nombre: 'Item 1', valor: 100, fechaIngreso: new Date() },
    { nombre: 'Item 2', valor: 200, fechaIngreso: new Date() },
    { nombre: 'Item 3', valor: 300, fechaIngreso: new Date() }
  ];

  filtro = {
    nombre: '',
    fechaDesde: '',
    fechaHasta: ''
  };

  filtrar() {
    // Lógica para filtrar los items según el filtro
    console.log('Filtrar con:', this.filtro);
  }

  limpiar() {
    this.filtro = {
      nombre: '',
      fechaDesde: '',
      fechaHasta: ''
    };
    // Lógica para limpiar los filtros y mostrar todos los items
    console.log('Filtros limpiados');
  }

  aprobar(item: any) {
    // Lógica para aprobar el item
    console.log('Aprobado:', item);
  }

  rechazar(item: any) {
    // Lógica para rechazar el item
    console.log('Rechazado:', item);
  }
}
