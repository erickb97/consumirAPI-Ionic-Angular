import { Component } from '@angular/core';
import {ProveedorService} from './../provider/proveedor.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public todo : FormGroup;

  constructor(private proveedorService: ProveedorService, private FormBuilder: FormBuilder, private router:Router) {
   
    this.todo = this.FormBuilder.group({
      correo: ['', Validators.required],
      contrasena: ['',Validators.required],
    });
  }
  logForm(){
    try {
      console.log(this.todo.value);
      this.login();
      this.todo.reset;
      this.router.navigateByUrl('/clientes-registrados');
      console.clear();
    } catch (error) {
      
    }
   
  }

  private login(){
    this.proveedorService.setlogin(this.todo.value).subscribe(erro =>{console.log(erro);});
  }
  
}
