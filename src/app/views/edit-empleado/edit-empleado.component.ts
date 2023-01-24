import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { empleadoI } from 'src/app/models/empleado.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {

  //Se añade al constructor las clases para poder importar y exportar datos
  constructor(private activerouter: ActivatedRoute, 
              private router:Router,
              private api:ApiService,
              private alerts:AlertsService) { }

  //editform crear una array vacia de los datos para despues inyectarle los datos traidos en el ngOnInit y datosEmpleado trae el interface de empleadoI
  datosEmpleado!: empleadoI;
  editForm = new FormGroup({
    cedula: new FormControl(''),
    nombres_Emp: new FormControl(''),
    apellidos_Emp: new FormControl(''),
    id: new FormControl('')
});

  //que muestre los datos del empleado seleccionado con router y snapshot
  ngOnInit(): void {
    let id = this.activerouter.snapshot.paramMap.get('id');
    this.api.getEmpleado(id).subscribe((data: any) =>{
      this.datosEmpleado = data[0];
      this.editForm.setValue({
        'cedula': this.datosEmpleado.cedula,
        'nombres_Emp': this.datosEmpleado.nombres_Emp,
        'apellidos_Emp':  this.datosEmpleado.apellidos_Emp,
        'id': id
      });
    });

  }

  //funcion para actualizar los datos y que salga una alerta de actualizado
  postForm(form:empleadoI | any) {
    this.api.putEmpleado(form).subscribe( data =>{
      let respuesta:ResponseI | any = data;
      if(respuesta.status == "ok"){
        this.alerts.showSuccess('Datos Modificados', 'Hecho');  
      }
      alert("Usuario Modificado!");
    });
  }

   //funcion para eliminar el empleado y redireccione al home
  eliminar(){
    let datos:empleadoI | any = this.editForm.value;
    this.api.deleteEmpleado(datos).subscribe(data =>{
      let respuesta:ResponseI | any = data;
      if(respuesta.status == "ok"){
        this.alerts.showSuccess('Empleado Eliminado', 'Hecho');
      }
      alert("Usuario Eliminado!");
    });
    this.router.navigate(['dashboard']);
  }

  //funcion para salir de la vista
  salir(){
    this.router.navigate(['dashboard']);
  }
}
