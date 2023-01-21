import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { empleadoI } from 'src/app/models/empleado.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute, 
              private router:Router,
              private api:ApiService) { }

  datosEmpleado!: empleadoI;
  editForm = new FormGroup({
    cedula: new FormControl(''),
    nombres_Emp: new FormControl(''),
    apellidos_Emp: new FormControl(''),
    id: new FormControl('')
});

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

  postForm(form:empleadoI | any) {
    this.api.putEmpleado(form).subscribe( data =>{
      console.log(data);
    });
  }

  eliminar(){
    let datos:empleadoI | any = this.editForm.value;
    this.api.deleteEmpleado(datos).subscribe(data =>{
      console.log(data);
    })
  }
}
