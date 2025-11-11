import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula, PeliculaDetalle } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas: (Pelicula | PeliculaDetalle)[] = [];
  @Output() cerrarModal = new EventEmitter<void>();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: { id }
    });

    // ✅ Espera a que el modal se cierre
    modal.onDidDismiss().then(() => {
      this.cerrarModal.emit();
    });

    await modal.present();
  }
}
