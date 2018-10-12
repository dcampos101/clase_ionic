import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcercaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
})
export class AcercaPage {
nombre: string;
miarreglo: any;
omitir: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = "Denis Campos";
this.omitir = 2;
    this.miarreglo = [
      {'id':'1','nombre':'Denis','apellido':'Campos','cargo':'Ingeniero'},
      {'id':'2','nombre':'Rodrigo','apellido':'Gomez','cargo':'Consultor'},
      {'id':'3','nombre':'Ivan','apellido':'Pinilla','cargo':'Ingeniero'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercaPage');
  }

}
