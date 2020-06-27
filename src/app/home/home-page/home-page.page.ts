import { Breed } from './../breed.model';
import { HomePageService } from './home-page.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit, OnDestroy {

  breedSub = new Subscription();

  breeds = [];

  constructor( private homePageService: HomePageService) { }

  ngOnInit() {
    this.breedSub = this.homePageService.updatedBreed.subscribe( updatedBreeds => {
      this.breeds = updatedBreeds;
    });
    console.log( 'Home Page', this.breeds);
  }

  ionViewDidEnter() {
    this.homePageService.getAllBreeds();
  }

  ngOnDestroy() {
    this.breedSub.unsubscribe();
  }

}
