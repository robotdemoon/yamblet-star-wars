import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ApiInternaService } from '../../../services/api-interna.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  public idStarship;
  public starship: any;
  constructor(
    private apiInt: ApiInternaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(val => {
      this.idStarship = +this.route.snapshot.params.id;
      this.apiInt.getStarship(this.idStarship).subscribe( r => { this.starship = r; } );
    });
   }

   deleteStarship(): void {
      this.apiInt.removeStarship(this.idStarship).subscribe( d => { this.router.navigate(['/mis-naves/']); } );
   }
}
