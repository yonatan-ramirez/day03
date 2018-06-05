import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { WarningMessage } from  './warning-message/warning-message';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { DangermessageComponent } from './dangermessage/dangermessage.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningMessage,
    SuccessmessageComponent,
    DangermessageComponent

   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
