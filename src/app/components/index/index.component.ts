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
    this.images = new Array<string>();
    this.images[0] = '/assets/banner_Kazan.jpg';
    this.images[1] = '/assets/banner_Rostov.jpg';
    this.images[2] = '/assets/ffp_banner_mydutyfree.jpg';
    this.images[3] = '/assets/baggage-fin.jpg';
    this.images[4] = '/assets/banner_Baggage.jpg';
    this.images[5] = '/assets/banner_Skypass.jpg';
  }

}
