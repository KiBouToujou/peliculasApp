import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
buscando = false;


  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) {}

  textoBuscar = '';
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Spiderman','Avengers', 'El señor de los anillos', 'La vida es bella', 'Love Live', 'Jujutsu Kaisen', 'Liella'];

  buscar(event: any) {
    const valor = event.detail.value;
    this.buscando = true;
    this.moviesService.buscarPeliculas( valor ).subscribe( (resp: any) => {
      console.log( resp );
      this.peliculas = resp['results'];
      this.buscando = false;
    });

  }

  ngOnInit() {

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

}
