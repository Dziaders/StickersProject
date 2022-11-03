import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  private modalService: NgbModal
  constructor(private injector: Injector) {}

  handleError(error: Error) {
      this.modalService = this.injector.get(NgbModal);
      this.modalService.open('Sorry, we are not able to connect to our servers, try again later');
      console.log("wywolano error handler", error)
  }
}
