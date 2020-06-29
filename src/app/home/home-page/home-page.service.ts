import { BreedCard } from './../breedCard.model';
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

  updatedBreed = new Subject<BreedCard[]>();

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
      this.updatedBreed.next(this.allBreeds);
    });
  }

  getBreed(breedId: string) {
    return this.http.get<
      {
        breedId: number,
        name: string,
        tagline: string,
        bgImg: any,
        puppyImg: any,
        minLife: number,
        maxLife: number,
        learningRate: string,
        minLitter: number,
        maxLitter: number,
        size: string,
        weightUnit: number,
        minMaleWeight: number,
        maxMaleWeight: number,
        minFemaleWeight: number,
        maxFemaleWeight: number,
        heightUnit: number,
        minMaleHeight: number,
        maxMaleHeight: number,
        minFemaleHeight: number,
        maxFemaleHeight: number,
        originCountry: number,
        otherNames: string,
        desc1: string,
        decs2: string,
        desc3: string,
        desc4: string,
        desc5: string,
        desc6: string,
        desc7: string,
        desc8: string,
        desc9: string,
        desc10: string,
        desc11: string,
        desc12: string,
        desc13: string,
        desc14: string,
        desc15: string,
        BreedImages: any,
      }
    >('https://heydog.tailbuds.com/breeds/' + breedId);
  }

  addBreed(formData: FormData) {
    console.log('breed Added');
    this.router.navigate(['/']);
    // let breedHeaders = new HttpHeaders();
    // breedHeaders = breedHeaders.set('Content-Type', 'multipart/form-data')
    // .set('Accept', 'application/json')
    // .set('x-api-key', 'iz5o853a5pqSNjRtqg89XyBiK6kY');
    // const options = {
    //   headers : breedHeaders,
    // };
    // this.http.post<{ message: string }>('https://heydog.tailbuds.com/breeds', formData, options).subscribe(data => {
    //   console.log(data);
    //   this.router.navigate(['/']);
    // }, error => {
    //   console.log(error);
    // });
  }

  updateBreed(breedId: number, formTextData: any, formImgData: FormData) {
    let breedTextHeaders = new HttpHeaders();
    breedTextHeaders = breedTextHeaders.set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('x-api-key', 'iz5o853a5pqSNjRtqg89XyBiK6kY');
    const textOptions = {
      headers: breedTextHeaders
    };

    let breedImgHeaders = new HttpHeaders();
    breedImgHeaders = breedImgHeaders.set('Content-Type', 'multipart/form-data')
    .set('Accept', 'application/json')
    .set('x-api-key', 'iz5o853a5pqSNjRtqg89XyBiK6kY');
    const imgOptions = {
      headers: breedImgHeaders
    };

    this.http.patch<{ message: string }>('https://heydog.tailbuds.com/breeds' + breedId, formTextData, textOptions).subscribe(data => {
      console.log('Breed text data updated' + data);
    }, error => {
      console.log(error);
    });

    this.http.patch<{ message: string }>('https://heydog.tailbuds.com/breeds' + breedId, formImgData, imgOptions).subscribe(data => {
      console.log('Breed images updated' + data);
      this.updatedBreed.next(this.allBreeds);
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }

  deleteBreed(breedId: number) {
    console.log(this.allBreeds);
    console.log('Deleted' + breedId);
    // this.http.delete('https://heydog.tailbuds.com/breeds/' + breedId).subscribe(res => {
    //   console.log(res);
    // });
    this.updatedBreed.next(this.allBreeds);
  }
}
