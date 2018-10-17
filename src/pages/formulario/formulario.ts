import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EnviarPage } from '../enviar/enviar';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  //Declaracion de variables
  entidad = {
    'nombre': '',
    'nit': '',
    'direccion': '',
    'telefono': '',
    'email': ''
  }

  enviar = EnviarPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage
  ) {
    //POr estar dentro del constructor no se coloca el this antes de la variable
    storage.set('mivariable', 'Este es el valor');

    storage.get('mivariable').then(
      (val) => {
      console.log(val);
    }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  //Funcion enviar formulario
  enviarEntidad(){
    console.log(this.entidad);
    //Guardar en el localStorage
    // cuando se usa dentro de la funcion se debe colocar el this antes de la variable
    this.storage.set('entidad',this.entidad).then(
      (data)=> {
        console.log('Dentro del set')
        console.log(data);
        //tome los datos guardados en el localStorage y vaya a la pagina enviar
        this.navCtrl.push(this.enviar);
      }

    );
  }

}
