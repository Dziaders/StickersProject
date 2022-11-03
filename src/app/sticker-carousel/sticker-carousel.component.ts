import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticker-carousel',
  templateUrl: './sticker-carousel.component.html',
  styleUrls: ['./sticker-carousel.component.scss']
})
export class StickerCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    return;
   }
   
  imgCollection: Array<object> = [
      {
        image: 'https://i.ibb.co/HgZsvhp/nice.png',
        thumbImage: 'https://i.ibb.co/HgZsvhp/nice.png',
        alt: 'Image 1',
      }, {
        image: 'https://i.ibb.co/fNYNVXL/bored.png',
        thumbImage: 'https://i.ibb.co/fNYNVXL/bored.png',
        alt: 'Image 2',
      }, {
        image: 'https://i.ibb.co/WgNqt1q/cheers.png',
        thumbImage: 'https://i.ibb.co/WgNqt1q/cheers.png',
        alt: 'Image 3'
      }, {
        image: 'https://i.ibb.co/QdBxxFV/hi.png',
        thumbImage: 'https://i.ibb.co/QdBxxFV/hi.png',
        alt: 'Image 4'
      }, {
        image: 'https://i.ibb.co/pKjYRDM/high-five.png',
        thumbImage: 'https://i.ibb.co/pKjYRDM/high-five.png',
        alt: 'Image 5'
      },{
        image: 'https://i.ibb.co/wSMN5np/hug.png',
        thumbImage: 'https://i.ibb.co/wSMN5np/hug.png',
        alt: 'Image 6'
      },{
        image: 'https://i.ibb.co/VWTvWTm/kiss.png',
        thumbImage: 'https://i.ibb.co/VWTvWTm/kiss.png',
        alt: 'Image 7'
      },{
        image: 'https://i.ibb.co/HgZsvhp/nice.png',
        thumbImage: 'https://i.ibb.co/HgZsvhp/nice.png',
        alt: 'Image 8'
      }
  ];

}
