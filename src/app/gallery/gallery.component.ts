import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StickerCollecrionService } from 'src/app/sticker-collection.service';


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
  stickers: Sticker[] = [];
  stickerForm: FormGroup;
  private subscription: Subscription
  constructor(private stickerCollectionService: StickerCollecrionService){}

  ngOnInit(){
    console.log('afterngoninit:', JSON.stringify(this.stickers));
    this.subscription = this.stickerCollectionService.stickersChanged.subscribe((stickers: Sticker[]) => {
      this.stickers = stickers;
    })
    this.stickerCollectionService.fetchStickers();
  }

  uploadStickers(){
    this.stickers = this.stickerCollectionService.getStickers();
    console.log("uploadStickers:", JSON.stringify(this.stickers));
  }

  editSticker(sticker: Sticker) {

    this.stickerForm = new FormGroup({
      id: new FormControl(sticker.id),
      name: new FormControl(sticker.name),
      collection: new FormControl(sticker.collection),
      date: new FormControl(sticker.date)
    });

    document.getElementById('editpoint').scrollIntoView();
  }

  save() {
    let index = this.stickers.findIndex(sticker => sticker.id === this.stickerForm.value.id);
    this.stickers[index] = this.stickerForm.value;
    this.stickerCollectionService.storeStickers(this.stickers);
  }

  cancel() {
    this.stickerForm = null;
  }

  deleteSticker(){
    let index = this.stickers.findIndex(sticker => sticker.id === this.stickerForm.value.id);
    this.stickers[index] = this.stickerForm.value;
    console.log("Delete index:", JSON.stringify(index));
    let newSet = this.stickerCollectionService.deleteSticker(index);
    this.stickerCollectionService.storeStickers(newSet);
    }

  smolDelete(stickerToDelete: Sticker){
    let index = this.stickers.findIndex(sticker => sticker.id === stickerToDelete.id);
    console.log('INDEX TO DELETE:',index)
    let newSet = this.stickerCollectionService.deleteSticker(index);
    this.stickerCollectionService.storeStickers(newSet);
  }
}




