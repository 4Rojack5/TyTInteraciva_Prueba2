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

  empleados: ListaempleadosI[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getEmpleados().subscribe(data =>{
      this.empleados = data;
    });
  }

  editarEmpleado(id: any){
    this.router.navigate(['edit', id]);
  }

  nuevoEmpleado(){
    this.router.navigate(['new']);
  }

}
