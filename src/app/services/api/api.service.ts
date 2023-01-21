import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { empleadoI } from 'src/app/models/empleado.interface';
import { ListaempleadosI } from 'src/app/models/empleados.interface';
import { ResponseI } from 'src/app/models/response.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/api/empleados";

  constructor(private http:HttpClient) { }

  getEmpleados():Observable<ListaempleadosI[]>{
    let direccion = this.url;
    return this.http.get<ListaempleadosI[]>(direccion);
  }

  getEmpleado(id: any):Observable<empleadoI>{
    let direccion = this.url + "/" + id;
    return this.http.get<empleadoI>(direccion);
  }

  putEmpleado(form:empleadoI){
    let direccion = this.url;
    return this.http.put(direccion, form);
  }

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

}