import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { ProveedorService } from '../provider/proveedor.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public todo2 : FormGroup;

  constructor(private proveedorService: ProveedorService, 
    private FormBuilder: FormBuilder, 
    private router:Router,
    public alertController: AlertController
    ) {
    this.todo2 = this.FormBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      dpi: ['', Validators.minLength(13)],
      correo: ['', Validators.email],
      marital: ['', Validators.required],
      genero: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  logForm(){
    let user = this.todo2.value;
    let newDataBinaryGender=0;
    let newDataBinaryMarital=0;
    if(user.genero == "Masculino" ){
      newDataBinaryGender =1
    }else{
      newDataBinaryGender =2
    }
    if (user.marital == "Casado") {
      newDataBinaryMarital =1
    } else {
      newDataBinaryMarital =2
    }

    this.sendinfo(user.nombre, user.apellido, user.edad, user.dpi, user.correo, user.contrasena, 
      newDataBinaryGender, newDataBinaryMarital);
      this.todo2.reset;
      this.presentAlert();
      
  }

  private sendinfo(nombre: string, apellido: string,
    edad: number, dpi: string, correo: string,
    contra: string,genero:number, marital:number){
    var user ={
      "tb_credenciales": {
        "id_rol": 1,
        "correo": correo,
        "contrasena": contra
      },
      "nombre": nombre,
      "apellido": apellido,
      "edad": edad,
      "dpi": dpi,
      "id_estado_marital": marital,
      "id_tipo_cliente": 1,
      "id_genero": genero
    };

    this.proveedorService.setnewUser(user).subscribe(erro =>{console.log(erro);});
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'New User',
      subHeader: 'Usuario Nuevo',
      message: 'El usuario se ha creado exitosamente',
      buttons: ['OK']
    }
    );

    await alert.present();
    this.router.navigateByUrl('/');
  }
}
