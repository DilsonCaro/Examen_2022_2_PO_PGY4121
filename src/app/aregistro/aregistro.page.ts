import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
//import servicio
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-aregistro',
  templateUrl: './aregistro.page.html',
  styleUrls: ['./aregistro.page.scss'],
})
export class AregistroPage {
  txtNombre ="";
  txtApellido ="";
  txtCorreo ="";
  txtPassword ="";
  txtRut ="";
  listado = [];
  constructor(private crud:CrudService,
              private toast:ToastController) { }

  async agregar(rut:HTMLInputElement, nombre:HTMLInputElement, apellido:HTMLInputElement, correo:HTMLInputElement, password:HTMLInputElement)
  {
    //validar
    if(rut.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El rut no fue especificado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
    else if(nombre.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El nombre no fue especificado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
    else if(apellido.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El apellido no fue especificado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
    else if(correo.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El correo no fue especificado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
    else if(password.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'La contraseña no fue especificado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
    else
    {
      const datos= [{"rut":rut.value,
                    "nombre":nombre.value,
                    "apellido":apellido.value,
                    "correo":correo.value,
                    "password":password.value                 
                    }];
      await this.crud.agregar(datos); //agregar el dato al storage
      const toast = await this.toast.create({
        message: 'Los datos fueron guardados',
        duration: 2000,
        color : "success",
        position: "middle"
    });
    toast.present();
    //limpia las cajas de texto
    rut.value = "";
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    password.value = "";
  }
  this.txtNombre = ""; // limpia la propiedad por ende la vista
  }
  async buscar(rut:HTMLInputElement)
  {
    // retorna el valor encontrado si existe
    const valor = await this.crud.rescatar(rut.value);
    if (valor != null)
    {
      //muestra el valor encontrado
      this.txtRut = valor[0].rut;
      this.txtNombre = valor[0].nombre;
      this.txtApellido = valor[0].apellido;
      this.txtCorreo = valor[0].correo;
      this.txtPassword = valor[0].password;
      //limpia las cajas de texto
      rut.value = "";
      this.listado = []; //elimina la lista de la vista
    }
    else
    {
      this.txtNombre="";
      this.txtApellido="";
      this.txtCorreo="";
      this.txtPassword="";
      const toast = await this.toast.create({
        message: 'El rut no fue encontrado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
  }
  async eliminar()
    {
      let rutEliminar = this.txtRut;
      if (rutEliminar.trim().length == 0)
      {
        const toast = await this.toast.create({
          message: 'El rut no fue especificado',
          duration: 2000,
          color : "danger",
          position: "middle"
        });
        toast.present();
      }
      else{
        const valor = await this.crud.rescatar(rutEliminar);
        if (valor == null)
        {
          const toast = await this.toast.create({
            message: 'El rut' + rutEliminar + ' no fue encontrado',
            duration: 2000,
            color : "danger",
            position: "middle"
          });
          toast.present();
        }
        else
        {
          this.crud.eliminar(rutEliminar)
          const toast = await this.toast.create({
            message: 'El rut' + rutEliminar + ' fue eliminado',
            duration: 2000,
            color : "danger",
            position: "middle"
          });
          toast.present();
        }

      }
      this.txtNombre="";
      this.txtApellido="";
      this.txtCorreo="";
      this.txtPassword="";

  }
  async listar()
  {
    // limpia la busqueda de la vista
    this.txtNombre="";
    this.txtApellido="";
    this.txtCorreo="";
    this.txtPassword="";
    //muestra todos los datos registrados en el storage
    this.listado = this.crud.listar();
  }
}
