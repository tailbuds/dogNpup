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
      imageUrl : '../../../../assets/dog1.jpg',
      name: 'Afador',
    },
    {
      id: '2',
      imageUrl : '../../../../assets/dog2.jpg',
      name: 'Akita Chow',
    },
    {
      id: '3',
      imageUrl : '../../../../assets/dog3.jpg',
      name: 'Pugabull',
    },
    {
      id: '4',
      imageUrl : '../../../../assets/dog4.jpg',
      name: 'Auggie',
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
    console.log( this.breeds );
    this.updatedBreed.next(this.breeds);
  }
}
