import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ainico',
  templateUrl: './ainico.page.html',
  styleUrls: ['./ainico.page.scss'],
})

export class AinicoPage{
  correo : String;
  password : String;
  mensaje : String;

  constructor(private alertController: AlertController,
    private toastController: ToastController) { }


  ngOnInit() {
  }

  async notificar(cor: HTMLInputElement, pass: HTMLInputElement)
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
    else if(pass.value != "123")
    {
      this.mensaje = "falta la contraseña";
      const toast = await this.toastController.create({
        message : "password incorrecta",
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
        header : 'Felicidades',
        subHeader : 'Ingresaste con exito',
        message: '',
        buttons: ['ok'],
      });
      await alert.present();
    }
  }
  async limpiar(cor: HTMLInputElement, pass: HTMLInputElement)
  {
    cor.value = "";
    pass.value = "";
  }
}
