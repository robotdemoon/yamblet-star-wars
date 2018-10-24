import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SwapiService } from '../../../services/swapi.service';
import { ApiInternaService } from '../../../services/api-interna.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public starship: any = [];
  public idStarship;

  constructor(
    private swapi: SwapiService,
    private apiInt: ApiInternaService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.route.params.subscribe(val => {
        this.idStarship = +this.route.snapshot.params.id;
        this.swapi.getStarship(this.idStarship).subscribe( r => {
          this.starship = {
            nombre: r.name,
            modelo: (r.model === 'unknown') ? '' : r.model,
            fabricante: (r.manufacturer === 'unknown') ? '' : r.manufacturer,
            costo: (r.cost_in_credits === 'unknown') ? null : r.cost_in_credits,
            longitud: (r.length === 'unknown') ? null : r.length,
            velocidad: (r.max_atmosphering_speed === 'unknown') ? null : r.max_atmosphering_speed,
            tripulacion: (r.crew === 'unknown') ? null : r.crew,
            pasajeros: (r.passengers === 'unknown') ? null : r.passengers,
            capacidad_carga: (r.cargo_capacity === 'unknown') ? null : r.cargo_capacity,
            suministros: (r.consumables === 'unknown') ? null : r.consumables,
            relacion_impulsor: (r.hyperdrive_rating === 'unknown') ? null : r.hyperdrive_rating
          };
        } );
      });
    }

    addStarship(): void {
      this.apiInt.addStarship(this.starship).subscribe( r => { this.router.navigate(['/mis-naves/' + r.id]); } );
    }
}
