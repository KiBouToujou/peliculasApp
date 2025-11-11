import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent  implements OnInit {

   constructor(private modalCtrl: ModalController) { }
  @Input() peliculas: Pelicula[] = [];
    slideOpts = {
        slidesPerView: 3.3,
        freeMode: true,
        spaceBetween: -10,
      };

  @Output() cargarMas = new EventEmitter();



onClick(){
  this.cargarMas.emit();

}


async verDetalle(id:string){

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }



  ngOnInit() {}

}
