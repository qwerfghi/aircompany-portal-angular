import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  images: Array<string>;

  constructor() {
  }

  ngOnInit() {
    this.images = [];
    this.images[0] = '/assets/banner_registration.jpg';
    this.images[1] = '/assets/banner_turkie.jpg';
    this.images[2] = '/assets/banner_italy.jpg';
    this.images[3] = '/assets/baggage-fin.jpg';
  }
}
