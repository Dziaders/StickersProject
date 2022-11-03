import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

	shortLink: string = "https://stickers-project-e23f9-default-rtdb.firebaseio.com/images.json";
	loading: boolean = false; // Flag variable
	file: File = null; // Variable to store file

	constructor(private fileUploadService: FileUploadService) { }

	ngOnInit(): void {
		return;
	}

	onChange(event) {
		this.file = event.target.files[0];
	}

	onUpload(){
		this.fileUploadService.upload(this.file);
	}
}
