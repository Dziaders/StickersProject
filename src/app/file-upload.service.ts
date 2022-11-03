import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
providedIn: 'root'
})

export class FileUploadService {	
baseApiUrl = "https://stickers-project-e23f9-default-rtdb.firebaseio.com/images.json";
	
constructor(private http:HttpClient) { }

upload(file):Observable<any> {
	const formData = new FormData();
	formData.append("file", file, file.name);
	this.http
        .put('https://stickers-project-e23f9-default-rtdb.firebaseio.com/images.json', file)
        .subscribe(response => {console.log(response)});
		return;
	}
}
