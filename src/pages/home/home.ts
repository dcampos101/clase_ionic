import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcercaPage } from '../acerca/acerca';
import { NuevaPage } from '../nueva/nueva';
import { AyudaPage } from '../ayuda/ayuda';
import { ContaminationPage } from '../contamination/contamination';
import { FormularioPage } from '../formulario/formulario';
import { MapaPage } from '../mapa/mapa';
import { CamaraPage } from '../camara/camara';

// se importa la clase
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
acerca = AcercaPage;
nueva = NuevaPage;
ayuda = AyudaPage;
home = HomePage;
contamination = ContaminationPage;
formulario = FormularioPage;
mapa = MapaPage;
camara = CamaraPage;

  constructor(
    public navCtrl: NavController,
    public confirmar: AlertController
  ) {

  }
  iraNuevapagina(){
    console.log("Click a nueva pagina");
    this.navCtrl.push(this.nueva)
  }

  // establece como raiz por eso no muestra el retorno
  iraAyuda(){
    console.log("Click a Ayuda");
    this.navCtrl.setRoot(this.ayuda);
  }

  iraHome(){
    console.log("Regresar a Home");
    this.navCtrl.setRoot(this.home);
  }

  iraFormulario(){
    console.log("Click a Formulario");
    this.navCtrl.push(this.formulario)
  }

  // funcion para la nueva pagina
  iraContamination(){
    console.log("Click Pagina Contamination")
    //this.navCtrl.push(this.contamination);
    let alert = this.confirmar.create(
      {
        title: 'confirmar',
        message:'Esta seguro que desea continuar?',
        buttons:[
          {
            text:'No',
            role:'Cancel',
            handler: () => {
              console.log('Escogio No')
            } //podria ejecutar una funcion
          },
          {
            text: 'Si',
            handler: () => {
              this.navCtrl.push(this.contamination)
            }
          }
        ]
      }
    );
    alert.present();
  }

  iraMapa(){
    console.log("Click a Formulario");
    this.navCtrl.push(this.mapa)
  }

  iraCamara(){
    console.log("Click a Formulario");
    this.navCtrl.push(this.camara)
  }
}
