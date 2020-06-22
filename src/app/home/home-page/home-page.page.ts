import { HomePageService } from './home-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  public breeds;

  constructor( private homePageService: HomePageService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.breeds = this.homePageService.getAllBreeds();
  }

}
