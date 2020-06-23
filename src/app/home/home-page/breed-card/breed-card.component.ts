import { Breed } from './../../breed.model';
import { HomePageService } from './../home-page.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.scss'],
})
export class BreedCardComponent implements OnInit {

  @Input() breed: Breed;

  constructor( private homeService: HomePageService ) {  }

  ngOnInit() {}

  onDelete() {
    this.homeService.deleteBreed(this.breed.id);
  }
}
