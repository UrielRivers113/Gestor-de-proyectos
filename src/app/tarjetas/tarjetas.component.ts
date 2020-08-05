import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  tareas: any = [];
  total = 1;

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    var result = this.total++;
    var agregar = "Tarea " + result;
    this.tareas.push(agregar)
  }

}
