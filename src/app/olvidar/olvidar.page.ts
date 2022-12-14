import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-olvidar',
  templateUrl: './olvidar.page.html',
  styleUrls: ['./olvidar.page.scss'],
})
export class OlvidarPage {
  correo : String;
  password : String;
  password2 : String;
  mensaje : String;

  constructor(private alertController: AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
  }
  async limpiar(cor: HTMLInputElement, pass: HTMLInputElement, pass2:HTMLInputElement)
  {
    cor.value = "";
    pass.value = "";
    pass2.value = "";
  }
  async notificar(cor: HTMLInputElement, pass: HTMLInputElement, pass2:HTMLInputElement)
  {
    if(cor.value == "")
    {
      this.mensaje = "Ingrese el correo";
      const toast = await this.toastController.create({
        message : "Ingrese el correo",
        duration: 2000
      })
      toast.present();
    }
    else if(pass.value == "")
    {
      this.mensaje = "falta la contraseña";
      const toast = await this.toastController.create({
        message : "Falta escribir la password",
        duration: 2000
      })
      toast.present();
    }
    else if(pass2.value == "")
    {
      this.mensaje = "falta la contraseña";
      const toast = await this.toastController.create({
        message : "Falta escribir la password",
        duration: 2000
      })
      toast.present();
    }
    else if(pass.value != pass2.value)
    {
      this.mensaje = "Las contraseñas no coinciden";
      const toast = await this.toastController.create({
        message : "Las contraseñas no coinciden",
        duration: 2000
      })
      toast.present();
    }
    // else if(con.value == "")
    // {
    //   this.mensaje = "Falta password";
    // }
    else
    {
      this.mensaje = "";
      const alert = await this.alertController.create({
        header : 'Cambio de contraseña',
        subHeader : 'Su cambio de contraseña será notificado a su correo',
        message: '',
        buttons: ['ok']
      });
      await alert.present();
    }
  }
}
