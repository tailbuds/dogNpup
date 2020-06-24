import { Breed } from './../breed.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  updatedBreed = new Subject<Breed[]>();

  private breeds: Breed[] = [
    {
      id: '1',
      name: 'afador',
      tagline: '',
      bgImg: '',
      puppyImg: '../../../assets/dog1.jpg',
      minLife: null,
      maxLife: null,
      learningRate: '',
      minLitter: null,
      maxLitter: null,
      size: '',
      weightUnit: null,
      minMaleWeight: null,
      maxMaleWeight: null,
      minFemaleWeight: null,
      maxFemaleWeight: null,
      heightUnit: null,
      minMaleHeight: null,
      maxMaleHeight: null,
      minFemaleHeight: null,
      maxFemaleHeight: null,
      originCountry: null,
      otherNames: '',
      desc1: '',
      desc2: '',
      desc3: '',
      desc4: '',
      desc5: '',
      desc6: '',
      desc7: '',
      desc8: '',
      desc9: '',
      desc10: '',
      desc11: '',
      desc12: '',
      desc13: '',
      desc14: '',
      desc15: '',
      images: ['']
    }
  ];

  constructor() { }

  getAllBreeds() {
    return [...this.breeds];
  }

  deleteBreed(id: string) {
    console.log(this.breeds);
    this.breeds = this.breeds.filter(b => {
      return b.id !== id;
    });
    console.log(this.breeds);
    this.updatedBreed.next(this.breeds);
  }
}
