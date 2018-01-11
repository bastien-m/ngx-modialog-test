import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { AppComponent } from './app.component';
import { ModalContentComponent } from './modal-content/modal-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  entryComponents: [
    ModalContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
