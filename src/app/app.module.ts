import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { StickerGeneratorComponent } from './sticker-generator/sticker-generator.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { StickerCarouselComponent } from './sticker-carousel/sticker-carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AboutComponent } from './about/about.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { StickerCollecrionService } from './sticker-collection.service';
import { AddStickerComponent } from './gallery/add-sticker/add-sticker.component';
import { ErrorHandlerService } from './error-handler/error-handler.service';
import { ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    StickerGeneratorComponent,
    FileUploadComponent,
    StickerCarouselComponent,
    AboutComponent,
    HowToUseComponent,
    HomepageComponent,
    GalleryComponent,
    AddStickerComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    FormsModule,
    LightgalleryModule,
    ReactiveFormsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),

    AngularFireModule,
    AngularFireDatabaseModule,                
    AngularFireStorageModule, NgbModule,
  

  ],
  providers: [StickerCollecrionService, LoginComponent,
     {provide: ErrorHandler, useClass: ErrorHandlerService},
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
