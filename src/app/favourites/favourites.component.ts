import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newEvent(){
    this.router.navigate(['/newEvent']);
  }
}
