import { Breed } from './../breed.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  bId = 1;

  updatedBreed = new Subject<Breed[]>();

  private breeds: Breed[];
  private allBreeds = [];

  constructor(private http: HttpClient, private router: Router) { }

  getAllBreeds() {
    this.http.get<[
      {
        id: number,
        name: string,
        puppyImg: string,
      }
    ]>('https://heydog.tailbuds.com/breeds').subscribe(fetchedBreeds => {
      this.allBreeds = fetchedBreeds;
      console.log(this.allBreeds);
      this.updatedBreed.next(this.allBreeds);
    });
  }

  deleteBreed(id: string) {
    console.log(this.breeds);
    this.breeds = this.breeds.filter(b => {
      return b.id !== id;
    });
    console.log(this.breeds);
    this.updatedBreed.next(this.breeds);
  }

  addBreed(formData: FormData) {
    console.log('breed Added');
    let breedHeaders = new HttpHeaders();
    breedHeaders = breedHeaders.set('Content-Type', 'multipart/form-data')
    .set('Accept', 'application/json')
    .set('x-api-key', 'iz5o853a5pqSNjRtqg89XyBiK6kY');
    const options = {
      headers : breedHeaders,
    };
    this.http.post<{ message: string }>('https://heydog.tailbuds.com/breeds', formData, options).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }
}
