import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Test11Module} from './test-11/test-11.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Test11Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
