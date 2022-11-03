import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StickerCollecrionService } from 'src/app/sticker-collection.service';


@Component({
  selector: 'app-add-sticker',
  templateUrl: './add-sticker.component.html',
  styleUrls: ['./add-sticker.component.scss']
})
export class AddStickerComponent implements OnInit {

  constructor(private stickerCollectionService: StickerCollecrionService) { }

  ngOnInit(): void {
    return;
  }

  onSubmit(form: NgForm){
    const value = form.value;
    console.log('NEW STICKER FORM VALUE:', value)
    this.stickerCollectionService.pushNewSticker(value.name, value.collection, value.date);
  }
}
