import { Component, OnInit } from '@angular/core';
import { ApiInternaService } from '../../../services/api-interna.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public starships: any = [];
  constructor(
    private apiInt: ApiInternaService
  ) { }


  ngOnInit() {
    this.apiInt.getStarships().subscribe( r => { this.starships = r;  } );
  }
}
