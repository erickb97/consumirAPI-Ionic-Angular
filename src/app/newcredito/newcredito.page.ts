import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../provider/proveedor.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newcredito',
  templateUrl: './newcredito.page.html',
  styleUrls: ['./newcredito.page.scss'],
})
export class NewcreditoPage implements OnInit {
  public todo3 : FormGroup;
  constructor(private proveedorService: ProveedorService, private FormBuilder: FormBuilder, private router:Router) { 
    
    this.todo3 = this.FormBuilder.group({
      monto: ['', Validators.required],
      idusuario: ['',Validators.required],
      cuotas: ['',Validators.required],
      mreal: ['',Validators.required],
      desc: ['']
    });
  }
  logForm(){
    let credit = this.todo3.value;
    let newuser, newcuota, newmreal, newmonto;

    newuser = parseInt(credit.idusuario);
    newcuota = parseInt(credit.cuotas);
    newmreal = parseInt(credit.mreal);
    newmonto = parseInt(credit.monto);

    try {
      this.credit(newmonto,newuser,newcuota,newmreal,credit.desc);
      this.todo3.reset;
      
    } catch (error) {
      
    }
  }
  credit(monto: number, usuario: number, cuotas: number, montoreal: number, desc: string){
    var credit = {
      "monto_solicitado": monto,
      "id_usuario": usuario,
      "id_cantidad_cuota": cuotas,
      "monto_real": montoreal,
      "estado": "P",
      "descripcion": desc
    };

    this.proveedorService.setCredit(credit).subscribe(erro =>{console.log(erro);});
  }
  ngOnInit() {
  }
}
