import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiInternaService } from '../../../services/api-interna.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {
  public idStarship;
  public starship: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiInt: ApiInternaService
    ) {
      this.route.params.subscribe(val => {
        this.idStarship = +this.route.snapshot.params.id;
        this.apiInt.getStarship(+this.idStarship).subscribe( r => {this.starship = r; } );
    });
  }

  updateStarship(): void {
    this.apiInt.updateStarship(this.starship, this.idStarship).subscribe( r => {
      this.router.navigate(['/mis-naves/' + this.idStarship]);
    } );
  }
}
