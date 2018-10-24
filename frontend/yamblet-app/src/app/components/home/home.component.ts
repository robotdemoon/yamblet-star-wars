import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public films: any = [];
  constructor(
    private swapi: SwapiService
  ) { }

  ngOnInit() {
    this.swapi.getFilms().subscribe( r => { this.films = r; } );
  }

}
