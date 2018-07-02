import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test13RootComponent } from './test-13-root/test-13-root.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Test13RootComponent],
  exports: [Test13RootComponent]
})
export class Test13Module { }
