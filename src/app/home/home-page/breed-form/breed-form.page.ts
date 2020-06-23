import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-breed-form',
  templateUrl: './breed-form.page.html',
  styleUrls: ['./breed-form.page.scss'],
})
export class BreedFormPage implements OnInit {

  formData = {
    name : '',
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value.breedName);
    this.formData.name = form.value.breedName;
    console.log(this.formData);
  }

}
