import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

import { ListaempleadosI } from 'src/app/models/empleados.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Se crea un property para traer la interface ListaempleadosI
  empleados: ListaempleadosI[] = [];

  //En el constructor se trae el servicio de la API y un router
  constructor(private api:ApiService, private router:Router) { }

  //Que apenas inicie la aplicación muestre los datos registrados
  ngOnInit(): void {
    this.api.getEmpleados().subscribe(data =>{
      this.empleados = data;
    });
  }

  //Funcion creada para que redirecione a la vista de editar el empleado
  editarEmpleado(id: any){
    this.router.navigate(['edit', id]);
  }

  //Funcion creada para que redirecione a la vista de crear el empleado
  nuevoEmpleado(){
    this.router.navigate(['new']);
  }

}
