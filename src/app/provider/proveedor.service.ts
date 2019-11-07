import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from './../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  dominio = 'https://ca073775.ngrok.io/';

  getAllUsers(){
    const path = this.dominio +'api/accountmanagement/usuarios';
    return this.http.get<User[]>(path);
  }

  getAllUsersId(id: string){
    const path = this.dominio +`api/accountmanagement/usuarios/${id}`;
    return this.http.get<User>(path);
  }

  setlogin(log:{}){
    const path = this.dominio +'api/accountmanagement/login';
    return this.http.post(path,log);
  }

  setnewUser(user:{}){

    const path = this.dominio+'api/accountmanagement/usuarios';
    return this.http.post(path,user);
  }

  setCredit(credito:{}){
    const path = this.dominio+'api/loanmanagement/generate';
    return this.http.post(path,credito);
  }
  

  delete(id: string){
    const path = this.dominio+'api/accountmanagement/borrar/'+id;
    return this.http.delete(path);
  }
}
