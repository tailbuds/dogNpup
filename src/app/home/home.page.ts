import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'default text';
  constructor() {}

  onClick(){
    this.text = ' changed text';
  }
}
