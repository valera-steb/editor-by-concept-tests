import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {Test11Module} from './test-11/test-11.module';
import {AppRoutingModule} from './app-routing.module';
import {Test12Module} from './test-12/test-12.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Test11Module, Test12Module, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
