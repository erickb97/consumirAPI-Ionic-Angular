import { Component, OnInit } from '@angular/core';
import {ProveedorService} from './../provider/proveedor.service';
@Component({
  selector: 'app-clientes-registrados',
  templateUrl: './clientes-registrados.page.html',
  styleUrls: ['./clientes-registrados.page.scss'],
})
export class ClientesRegistradosPage implements OnInit {

  constructor(
    private proveedorService: ProveedorService
  ) { }

  usr
  ngOnInit() {
  }
  public getAllUsers(){
    this.proveedorService.getAllUsers().subscribe(todos =>{this.usr = todos;}, error =>{console.log(error);});
    
  }
  public getAllUserId(id: string){
    this.proveedorService.getAllUsersId(id).subscribe(user =>{console.log(user);});
  }
}
