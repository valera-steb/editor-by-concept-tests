import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Test12RootComponent} from './test-12-root/test-12-root.component';
import {Test12NoteComponent} from './test-12-note/test-12-note.component';
import {Test12SubComponent} from './test-12-sub/test-12-sub.component';
import {Inline01Component} from './test-12-inlines/inline-01/inline-01.component';
import {InlinerComponent} from './inliner/inliner.component';
import {Inline02Component} from './test-12-inlines/inline-02/inline-02.component';
import {Inline02ActiveContainerComponent} from './test-12-inlines/inline-02/inline-02-active-container';
import {Inline02ActiveItemComponent} from './test-12-inlines/inline-02/inline-02-active-item';
import {FormsModule} from '@angular/forms';
import {Inline02PassiveContainerComponent} from './test-12-inlines/inline-02/inline-02-passive-container';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [Test12RootComponent, Test12NoteComponent, Test12SubComponent, Inline01Component, InlinerComponent, Inline02Component,
    Inline02ActiveContainerComponent, Inline02ActiveItemComponent, Inline02PassiveContainerComponent],
  exports: [Test12RootComponent, Test12NoteComponent],
  entryComponents: [Inline01Component, Inline02Component]
})
export class Test12Module {
}
