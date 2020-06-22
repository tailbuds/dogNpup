import { HomePageService } from './../home-page.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.scss'],
})
export class BreedCardComponent implements OnInit {

  @Input() breed;

  constructor() {  }

  ngOnInit() {}

  onDelete() {
    console.log('Id : ' + this.breed.id );
  }
}
