import { LoadingController } from '@ionic/angular';
import { HomePageService } from './../home-page.service';
import { Breed } from './../../breed.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breed-form',
  templateUrl: './breed-form.page.html',
  styleUrls: ['./breed-form.page.scss'],
})
export class BreedFormPage implements OnInit {

  fetchedBreed: Breed;
  private mode = 'add';
  private breedId = null;
  isLoading = false;
  images;
  fetchedImages;

  constructor(
    private homePageService: HomePageService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController) { }


  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('breedId')) {
        this.mode = 'update';
        this.breedId = paramMap.get('breedId');
        this.isLoading = true;
        this.loading();
        this.homePageService.getBreed(this.breedId).subscribe((breedData) => {
          this.isLoading = false;
          this.loadingCtrl.dismiss();
          console.log(breedData);
          this.fetchedBreed = {
            breedId: breedData.breedId,
            name: breedData.name,
            tagline: breedData.tagline,
            bgImg: breedData.bgImg,
            puppyImg: breedData.puppyImg,
            minLife: breedData.minLife,
            maxLife: breedData.maxLife,
            learningRate: breedData.learningRate,
            minLitter: breedData.minLitter,
            maxLitter: breedData.maxLitter,
            size: breedData.size,
            weightUnit: breedData.weightUnit,
            minMaleWeight: breedData.minMaleWeight,
            maxMaleWeight: breedData.maxMaleWeight,
            minFemaleWeight: breedData.minFemaleWeight,
            maxFemaleWeight: breedData.maxFemaleWeight,
            heightUnit: breedData.heightUnit,
            minMaleHeight: breedData.minMaleHeight,
            maxMaleHeight: breedData.maxMaleHeight,
            minFemaleHeight: breedData.minFemaleHeight,
            maxFemaleHeight: breedData.maxFemaleHeight,
            originCountry: breedData.originCountry,
            otherNames: breedData.otherNames,
            desc1: breedData.desc1,
            desc2: breedData.decs2,
            desc3: breedData.desc3,
            desc4: breedData.desc4,
            desc5: breedData.desc5,
            desc6: breedData.desc6,
            desc7: breedData.desc7,
            desc8: breedData.desc8,
            desc9: breedData.desc9,
            desc10: breedData.desc10,
            desc11: breedData.desc11,
            desc12: breedData.desc12,
            desc13: breedData.desc13,
            desc14: breedData.desc14,
            desc15: breedData.desc15,
            BreedImages: breedData.BreedImages,
          };
          console.log(this.fetchedBreed);
          this.fetchedImages = breedData.BreedImages;
        });
      } else {
        this.mode = 'add';
        this.breedId = null;
      }
    });
  }

  ionViewDidEnter() {
  }

  uploadFiles(event: any) {
    this.images = event.target.files;
  }

  onSubmit(form: NgForm) {
    if (this.mode === 'add') {
      const formData = new FormData();
      formData.set('name', form.value.name);
      formData.set('tagline', form.value.tagline);
      formData.append('bgImg', form.value.bgImg);
      formData.append('puppyImg', form.value.puppyImg);
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
      console.log(this.images);
      for (const i of Object.keys(this.images)) {
        formData.append('images', this.images[i].name);
      }
      console.log(formData.get('images'));
      // console.log(form.value.images);
      // formData.set('images', form.value.images);
      // console.log(formData.get('images'));
      this.homePageService.addBreed(formData);
    } else if (this.mode === 'update') {
      const formTextData = {
        name: form.value.name,
        tagline: form.value.tagline,
        minLife: form.value.minLife,
        maxLife: form.value.maxLife,
        learningRate: form.value.learningRate,
        minLitter: form.value.minLitter,
        maxLitter: form.value.maxLitter,
        size: form.value.size,
        weightUnit: form.value.weightUnit,
        minMaleWeight: form.value.minMaleWeight,
        maxMaleWeight: form.value.maxMaleWeight,
        minFemaleWeight: form.value.minFemaleWeight,
        maxFemaleWeight: form.value.maxFemaleWeight,
        heightUnit: form.value.heightUnit,
        minMaleHeight: form.value.minMaleHeight,
        maxMaleHeight: form.value.maxMaleHeight,
        minFemaleHeight: form.value.minFemaleHeight,
        maxFemaleHeight: form.value.maxFemaleHeight,
        originCountry: form.value.originCountry,
        otherNames: form.value.otherNames,
        desc1: form.value.desc1,
        desc2: form.value.desc2,
        desc3: form.value.desc3,
        desc4: form.value.desc4,
        desc5: form.value.desc5,
        desc6: form.value.desc6,
        desc7: form.value.desc7,
        desc8: form.value.desc8,
        desc9: form.value.desc9,
        desc10: form.value.desc10,
        desc11: form.value.desc11,
        desc12: form.value.desc12,
        desc13: form.value.desc13,
        desc14: form.value.desc14
      };

      const formImgData = new FormData();
      formImgData.append('bgImg', form.value.bgImg);
      formImgData.append('puppyImg', form.value.puppyImg);
      console.log(this.images);
      console.log(this.fetchedImages);
      if (this.images){
        for (const i of Object.keys(this.images)) {
          formImgData.append('images', this.images[i].name);
        }
      } else {
        for (const i of Object.keys(this.fetchedImages)) {
          formImgData.append('images', this.fetchedImages);
        }
      }
      console.log(formTextData);
      console.log(formImgData.get('puppyImg'));
      // this.homePageService.updateBreed(this.breedId, formTextData, formImgData);
    }
  }

  loading() {
    this.loadingCtrl.create({
      message: 'Fetching Breed Data ...',
      keyboardClose: true,
      spinner: 'lines-small',
      cssClass: 'loadingClass'
    }).then(loadingEl => {
      loadingEl.present();
    });
  }

}

