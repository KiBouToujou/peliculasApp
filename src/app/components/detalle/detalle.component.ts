import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, Pelicula, PeliculaDetalle } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

constructor(private moviesService: MoviesService,
            private modalCtrl: ModalController,
            private dataLocal: DataLocalService,) {}

fav = false;

favorito() {
  const existe = this.dataLocal.guardarPelicula(this.pelicula);
  this.estrella = (existe) ? 'star' : 'star-outline';
}


regresar() {
this.modalCtrl.dismiss();
}

  @Input() id: any;

  pelicula : PeliculaDetalle = {};
  actores: Cast [] = [];
  oculto = 150;
  estrella = 'star-outline';

slideOptActores = {
  slidesPerView: 3.3,
  freeMode: true,
  spaceBetween: -5,
};


   ngOnInit() {
    //console.log('ID', this.id)

    this.dataLocal.existePelicula( this.id ).then (
      existe => this.estrella = (existe) ? 'star' : 'star-outline');


    this.moviesService.getPeliculaDetalle( this.id ).subscribe( resp => {
      console.log( resp );
      this.pelicula =  resp;
    });

    this.moviesService.getActoresPelicula( this.id ).subscribe( resp => {
      console.log( resp );
      this.actores = resp.cast;
    });
  }



}
