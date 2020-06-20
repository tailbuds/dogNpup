import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  breeds = [
    {
      imageUrl : '../../../../assets/dog1.jpg',
      name: '',
    },
    {
      imageUrl : '../../../../assets/dog2.jpg',
      name: '',
    },
    {
      imageUrl : '../../../../assets/dog3.jpg',
      name: '',
    },
    {
      imageUrl : '../../../../assets/dog4.jpg',
      name: '',
    },
    {
      imageUrl : '../../../../assets/dog2.jpg',
      name: '',
    },
    {
      imageUrl : '../../../../assets/dog3.jpg',
      name: '',
    },
    {
      imageUrl : '../../../../assets/dog4.jpg',
      name: '',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
