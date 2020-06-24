import { Breed } from './../../breed.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-breed-form',
  templateUrl: './breed-form.page.html',
  styleUrls: ['./breed-form.page.scss'],
})
export class BreedFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const formData = new FormData();
    formData.set('name', form.value.name);
    formData.set('tagline', form.value.tagline);
    formData.set('bgImg', form.value.bgImg);
    formData.set('puppyImg', form.value.puppyImg);
    formData.set('minLife', form.value.minLife);
    formData.set('maxLife', form.value.maxLife);
    formData.set('learningRate', form.value.learningRate);
    formData.set('minLitter', form.value.minLitter);
    formData.set('maxLitter', form.value.maxLitter);
    formData.set('size', form.value.size);
    formData.set('weightUnit', form.value.weightUnit);
    formData.set('minMaleWeight', form.value.minMaleWeight);
    formData.set('maxMaleWeight', form.value.maxMaleWeight);
    formData.set('minFemaleWeight', form.value.minFemaleWeight);
    formData.set('maxFemaleWeight', form.value.maxFemaleWeight);
    formData.set('heightUnit', form.value.heightUnit);
    formData.set('minMaleHeight', form.value.minMaleHeight);
    formData.set('maxMaleHeight', form.value.maxMaleHeight);
    formData.set('minFemaleHeight', form.value.minFemaleHeight);
    formData.set('maxFemaleHeight', form.value.maxFemaleHeight);
    formData.set('originCountry', form.value.originCountry);
    formData.set('otherNames', form.value.otherNames);
    formData.set('desc1', form.value.desc1);
    formData.set('desc2', form.value.desc2);
    formData.set('desc3', form.value.desc3);
    formData.set('desc4', form.value.desc4);
    formData.set('desc5', form.value.desc5);
    formData.set('desc6', form.value.desc6);
    formData.set('desc7', form.value.desc7);
    formData.set('desc8', form.value.desc8);
    formData.set('desc9', form.value.desc9);
    formData.set('desc10', form.value.desc10);
    formData.set('desc11', form.value.desc11);
    formData.set('desc12', form.value.desc12);
    formData.set('desc13', form.value.desc13);
    formData.set('desc14', form.value.desc14);
    formData.set('desc15', form.value.desc15);
    // for (const i of Object.keys(form.value.images)) {
    //   formData.append('images', form.value.images[i]);
    // }
    formData.set('images', form.value.images);
    console.log(formData.get('name'));
  }

}
