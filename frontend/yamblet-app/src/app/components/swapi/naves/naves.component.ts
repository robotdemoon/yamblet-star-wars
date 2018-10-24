import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SwapiService } from '../../../services/swapi.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent {
  public starships: any = [];
  public film;
  constructor(
    private swapi: SwapiService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(val => {
      const id = this.route.snapshot.params.idmovie;
      this.swapi.getFilm(+id, 'starships').subscribe( r => {
        if (r.length && r.length > 0) {
          r.forEach(e => {
            this.swapi.getStarshipProperty(e, 'name').subscribe( rr => { this.starships.push(rr); } );
          });
        }
       });
    });
  }
}
