import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { empleadoI } from 'src/app/models/empleado.interface';
import { ListaempleadosI } from 'src/app/models/empleados.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Se importa el url de la api
  url:string = "http://localhost:8080/api/empleados";

  //se importa el cliente HTTP para poder hacer los metodos
  constructor(private http:HttpClient) { }

  //Metodo para traer empleados, mostrarlos y se añade un observable para que muestre en el console.log que trae
  getEmpleados():Observable<ListaempleadosI[]>{
    let direccion = this.url;
    return this.http.get<ListaempleadosI[]>(direccion);
  }

  //Metodo para traer un empleado solo y se añade un observable para que muestre en el console.log que trae
  getEmpleado(id: any):Observable<empleadoI>{
    let direccion = this.url + "/" + id;
    return this.http.get<empleadoI>(direccion);
  }
  //Metodo para actualizar los empleados
  putEmpleado(form:empleadoI){
    let direccion = this.url;
    return this.http.put(direccion, form);
  }

  //Metodo para eliminar un empleado
  deleteEmpleado(form:empleadoI){
    let direccion = this.url;
    let Options = {
      Headers: new HttpHeaders({
        'Conten-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete(direccion, Options);
  }

  //Metodo para agregar empleado
  postEmpleado(form:empleadoI){
    let direccion = this.url;
    return this.http.post(direccion, form);
  }

}
