import { Breed } from './../../breed.model';
import { HomePageService } from './../home-page.service';
import { Component, OnInit, Input } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.scss'],
})
export class BreedCardComponent implements OnInit {

  @Input() breed;

  constructor(private homeService: HomePageService,
              private alertController: AlertController ) { }

  ngOnInit() { }

  onDelete() {
    const alert = this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this breed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteBreed();
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });

  }

  // updateBreed() {
  //   this.homeService.updateBreed(this.breed.breedId);
  // }

  deleteBreed() {
    this.homeService.deleteBreed(this.breed.breedId);
  }
}
