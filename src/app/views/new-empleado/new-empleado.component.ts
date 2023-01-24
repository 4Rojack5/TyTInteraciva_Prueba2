import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { empleadoI } from 'src/app/models/empleado.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-empleado',
  templateUrl: './new-empleado.component.html',
  styleUrls: ['./new-empleado.component.css']
})
export class NewEmpleadoComponent implements OnInit {

  //newform mantener la array vacia de los datos
  newForm = new FormGroup({
    cedula: new FormControl(''),
    nombres_Emp: new FormControl(''),
    apellidos_Emp: new FormControl(''),
    id: new FormControl('')
  });

  //Se añade al constructor las clases para poder importar y exportar datos
  constructor(private activerouter: ActivatedRoute, 
    private router:Router,
    private api:ApiService,
    private alerts:AlertsService) { }

  ngOnInit(): void {
  }

  //funcion para agregar un nuevo usuario y redireccionarlo al home
  postForm(form:empleadoI | any){
    this.api.postEmpleado(form).subscribe(data =>{
      console.log(data);
      alert("Usuario Agregado!");
    });
    this.router.navigate(['dashboard']);
  }

  //funcion para salir de la vista.
  salir(){
    this.router.navigate(['dashboard']);
  }

}
