import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Test12RootComponent} from './test-12-root/test-12-root.component';
import { Test12NoteComponent } from './test-12-note/test-12-note.component';
import { Test12SubComponent } from './test-12-sub/test-12-sub.component';
import { Inline01Component } from './test-12-inlines/inline-01/inline-01.component';
import { InlinerComponent } from './inliner/inliner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Test12RootComponent, Test12NoteComponent, Test12SubComponent, Inline01Component, InlinerComponent],
  exports: [Test12RootComponent],
  entryComponents: [Inline01Component]
})
export class Test12Module {
}
