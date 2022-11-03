import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StickerCollecrionService } from 'src/app/sticker-collection.service';
// import { STICKERS } from 'src/app/sticker-collection.service';
// import { FirebaseDataService } from 'src/app/firebase-data.service';


interface Sticker {
  id?: number;
  name: string;
  collection: string;
  date: number;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class GalleryComponent implements OnInit {
  constructor(private stickerCollectionService: StickerCollecrionService){}

  ngOnInit(){
    this.stickerCollectionService.fetchStickers();
    // this.stickers = this.stickerCollectionService.getStickers();
    this.uploadStickers();
    console.log('afterngoninit:',JSON.stringify(this.stickers));
    this.subscription = this.stickerCollectionService.stickersChanged.subscribe((stickers: Sticker[]) =>{
      this.stickers=stickers;
    })
  }

  // stickers: Sticker[] = STICKERS;
  stickers: Sticker[] = [];
  sticker: FormGroup;
  private subscription: Subscription
  

  

  uploadStickers(){
    this.stickers = this.stickerCollectionService.getStickers();
    console.log("uploadStickers:", JSON.stringify(this.stickers));
  }

  editSticker(sticker: Sticker) {

    this.sticker = new FormGroup({
      id: new FormControl(sticker.id),
      name: new FormControl(sticker.name),
      collection: new FormControl(sticker.collection),
      date: new FormControl(sticker.date)
    });

    document.getElementById('editpoint').scrollIntoView();
  }

  save() {
    let index = this.stickers.findIndex(sticker => sticker.id === this.sticker.value.id);
    this.stickers[index] = this.sticker.value;
    this.stickerCollectionService.storeStickers(this.stickers);
    this.stickers = this.stickerCollectionService.getStickers();
  }

  cancel() {
    this.sticker = null;
  }

  deleteSticker(){
  let index = this.stickers.findIndex(sticker => sticker.id === this.sticker.value.id);
  this.stickers[index] = this.sticker.value;
  console.log("Delete index:", JSON.stringify(index));
  let newSet = this.stickerCollectionService.deleteSticker(index);
  this.stickerCollectionService.storeStickers(newSet);
  this.stickers = this.stickerCollectionService.getStickers();
  }

  smolDelete(stickerr){
    let index = this.stickers.findIndex(sticker => sticker.id === stickerr.id);
    console.log('INDEX TO DELETE:',index)
    let newSet = this.stickerCollectionService.deleteSticker(index);
    this.stickerCollectionService.storeStickers(newSet);
    this.subscription = this.stickerCollectionService.stickersChanged.subscribe((stickers: Sticker[]) =>{
      this.stickers=stickers;
    })
}
}




