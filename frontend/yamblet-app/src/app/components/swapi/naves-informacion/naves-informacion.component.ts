import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SwapiService } from '../../../services/swapi.service';

@Component({
  selector: 'app-naves-informacion',
  templateUrl: './naves-informacion.component.html',
  styleUrls: ['./naves-informacion.component.css']
})
export class NavesInformacionComponent {
  public starship: any = [];
  public idStarship;
  constructor(
    private swapi: SwapiService,
    private route: ActivatedRoute
    ) {
      this.route.params.subscribe(val => {
        this.idStarship = +this.route.snapshot.params.id;
        this.swapi.getStarship(this.idStarship).subscribe( r => { this.starship = r; } );
      });
    }

}
