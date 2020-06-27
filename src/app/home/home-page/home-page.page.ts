import { LoadingController } from '@ionic/angular';
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
  isLoading = false;
  breeds = [];

  constructor( private homePageService: HomePageService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.isLoading = true;
    this.loading();
    this.homePageService.getAllBreeds();
    this.breedSub = this.homePageService.updatedBreed.subscribe( updatedBreeds => {
      this.loadingCtrl.dismiss();
      this.isLoading = false;
      this.breeds = updatedBreeds;
      console.log('Breeds : ' , this.breeds);
    });
  }

  loading(){
    this.loadingCtrl.create({
      message: 'Fetching Breeds ...',
      keyboardClose : true,
      spinner : 'lines-small',
      cssClass : 'loadingClass'
    }).then(loadingEl => {
      loadingEl.present();
    });
  }

  ngOnDestroy() {
    this.breedSub.unsubscribe();
  }

}
