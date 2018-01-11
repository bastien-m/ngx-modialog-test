import { Component, OnInit } from '@angular/core';
import { MyContext } from '../app.component';
import { DialogRef, CloseGuard, ModalComponent } from 'ngx-modialog';


@Component({
  selector: 'app-modal-content',
  template: `
    <p>
      modal-content works!
      <button type="button" (click)="validate()">Validate</button>
    </p>
  `,
  styles: []
})
export class ModalContentComponent implements OnInit, CloseGuard, ModalComponent<MyContext> {

  public context: MyContext;

  constructor(public dialog: DialogRef<MyContext>) {
    this.context = dialog.context;
  }

  ngOnInit() {

  }

  beforeClose(): boolean {
    return true;
  }

  beforeDismiss(): boolean {
    return true;
  }

  validate() {
    this.dialog.close(true);
  }

}
