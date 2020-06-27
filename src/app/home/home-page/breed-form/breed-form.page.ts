import { HomePageService } from './../home-page.service';
import { Breed } from './../../breed.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-breed-form',
  templateUrl: './breed-form.page.html',
  styleUrls: ['./breed-form.page.scss'],
})
export class BreedFormPage implements OnInit {

  constructor(private homePageService: HomePageService) { }

  formData = new FormData();

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.formData = new FormData();
  }

  onSubmit(form: NgForm) {
    this.formData.set('name', form.value.name);
    this.formData.set('tagline', form.value.tagline);
    this.formData.append('bgImg', form.value.bgImg);
    this.formData.append('puppyImg', form.value.puppyImg);
    this.formData.set('minLife', form.value.minLife);
    this.formData.set('maxLife', form.value.maxLife);
    this.formData.set('learningRate', form.value.learningRate);
    this.formData.set('minLitter', form.value.minLitter);
    this.formData.set('maxLitter', form.value.maxLitter);
    this.formData.set('size', form.value.size);
    this.formData.set('weightUnit', form.value.weightUnit);
    this.formData.set('minMaleWeight', form.value.minMaleWeight);
    this.formData.set('maxMaleWeight', form.value.maxMaleWeight);
    this.formData.set('minFemaleWeight', form.value.minFemaleWeight);
    this.formData.set('maxFemaleWeight', form.value.maxFemaleWeight);
    this.formData.set('heightUnit', form.value.heightUnit);
    this.formData.set('minMaleHeight', form.value.minMaleHeight);
    this.formData.set('maxMaleHeight', form.value.maxMaleHeight);
    this.formData.set('minFemaleHeight', form.value.minFemaleHeight);
    this.formData.set('maxFemaleHeight', form.value.maxFemaleHeight);
    this.formData.set('originCountry', form.value.originCountry);
    this.formData.set('otherNames', form.value.otherNames);
    this.formData.set('desc1', form.value.desc1);
    this.formData.set('desc2', form.value.desc2);
    this.formData.set('desc3', form.value.desc3);
    this.formData.set('desc4', form.value.desc4);
    this.formData.set('desc5', form.value.desc5);
    this.formData.set('desc6', form.value.desc6);
    this.formData.set('desc7', form.value.desc7);
    this.formData.set('desc8', form.value.desc8);
    this.formData.set('desc9', form.value.desc9);
    this.formData.set('desc10', form.value.desc10);
    this.formData.set('desc11', form.value.desc11);
    this.formData.set('desc12', form.value.desc12);
    this.formData.set('desc13', form.value.desc13);
    this.formData.set('desc14', form.value.desc14);
    this.formData.set('desc15', form.value.desc15);
    // for (const i of Object.keys(form.value.images)) {
    //   this.formData.append('images' + [i], form.value.images[i]);
    // }
    // console.log(form.value.images);
    // this.formData.set('images', form.value.images);
    // console.log(this.formData.get('images'));
    this.homePageService.addBreed(this.formData);
  }

  uploadFiles(event: any){
    const images = event.target.files;
    console.log(images);
    for (const i of Object.keys(images)) {
      this.formData.append('images', images[i].name);
    }
    // this.formData.set('images', form.value.images);
    console.log(this.formData.get('images'));
  }

}

