import { Component } from '@angular/core';
import { BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { DialogRef, overlayConfigFactory } from 'ngx-modialog';
import { Modal } from 'ngx-modialog';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private modal: Modal) {
  }

  openModal() {
    console.log('openModal');
    this.modal.open(ModalContentComponent, overlayConfigFactory({ title: 'Title !!!'}, BSModalContext))
    .result
    .then(r => {
      console.log(r);
    }, err => {
      console.log(err);
    });
  }

  methodTest() {
    this.open()
    .result
    .then(r => {
      if (r) {
        console.log('real');
      } else {
        console.log('false');
      }
    });
  }

  open() {
    return { result : new Promise(r => r(true))};
  }

}


export class MyContext extends BSModalContext {}
