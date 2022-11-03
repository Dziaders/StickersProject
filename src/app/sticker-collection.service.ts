import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { ErrorHandlerService } from "./error-handler/error-handler.service";

interface Sticker {
    id?: number;
    name: string;
    collection: string;
    date: number;
  }
  
  @Injectable({
    providedIn: 'root'
  })

export class StickerCollecrionService{
  
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService){}


     STICKERS = [];

      stickersChanged = new Subject<Sticker[]>();

      storeStickers(sentStickers: Sticker[]){
        this.http
        .put('https://stickers-project-e23f9-default-rtdb.firebaseio.com/stickers.json', sentStickers)
        .subscribe({
            error: (er) => {this.errorHandlerService.handleError(er)},
            next: (response) => {console.log(response)}
        });
    }

      fetchStickers(){
        this.http
        .get('https://stickers-project-e23f9-default-rtdb.firebaseio.com/stickers.json')
        .subscribe({
            error: (er) => {this.errorHandlerService.handleError(er)},
            next: (fetchedStickers) => {
                console.log('fetchedStickers:',fetchedStickers);
                this.setStickers(fetchedStickers);
        }});
    }

      getStickers(){
        this.fetchStickers();
        console.log("getStickers::", JSON.stringify(this.STICKERS));
        return this.STICKERS;
      }

    setStickers(newStickers){
      this.STICKERS = newStickers;
        this.stickersChanged.next(this.STICKERS.slice());
        console.log("setStickers::", JSON.stringify(this.STICKERS));
      }

    deleteSticker(index:number){
        this.STICKERS.splice(index, 1);
        this.stickersChanged.next(this.STICKERS.slice());
        console.log("STICKERSDELETED:", this.STICKERS);
        return this.STICKERS;
        
    }
    pushNewSticker(name: string, collection: string, date: number){
      console.log(name, collection, date);
      let newSticker = {} as Sticker;
      newSticker.name = name;
      newSticker.collection = collection;
      newSticker.date = date;
      this.STICKERS.push(newSticker);
      console.log('PUSHED STICKERS:::::::::::::',this.STICKERS)
      this.storeStickers(this.STICKERS);
      this.stickersChanged.next(this.STICKERS.slice());
    }
}