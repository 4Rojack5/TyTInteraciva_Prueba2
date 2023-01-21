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

  newForm = new FormGroup({
    cedula: new FormControl(''),
    nombres_Emp: new FormControl(''),
    apellidos_Emp: new FormControl(''),
    id: new FormControl('')
  });

  constructor(private activerouter: ActivatedRoute, 
    private router:Router,
    private api:ApiService,
    private alerts:AlertsService) { }

  ngOnInit(): void {
  }

  postForm(form:empleadoI | any){
    this.api.postEmpleado(form).subscribe(data =>{
      console.log(data);
      alert("Usuario Agregado!");
    });
    this.router.navigate(['dashboard']);
  }

  salir(){
    this.router.navigate(['dashboard']);
  }

}
