import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Test13RootComponent} from './test-13-root/test-13-root.component';
import {Test12Module} from '../test-12/test-12.module';
import {Inline01Component} from './inlines/inline-01/inline-01.component';
import {Inline01Service} from './inlines/inline-01/inline01service';
import {Inline01FolderComponent} from './inlines/inline-01/inline-01-folder.component';
import {T13Inline02Component} from './inlines/02/component';
import {T13Inline02MenuComponent} from './inlines/02/menu.component';
import {T13Inline02MenuItemComponent} from './inlines/02/menu-item.component';
import {T13Inline02FolderComponent} from './inlines/02/folder.component';
import {T13Inline02LayoutHolderComponent} from './inlines/02/layout-holder.component';
import {T13Inline02SingleLayoutComponent} from './inlines/02/single-layout.component';
import {T13Inline02NotesHolderComponent} from './inlines/02/notes-holder.component';

@NgModule({
  imports: [
    CommonModule, Test12Module
  ],
  declarations: [Test13RootComponent, Inline01Component, Inline01FolderComponent, T13Inline02Component,
    T13Inline02MenuComponent, T13Inline02MenuItemComponent, T13Inline02FolderComponent, T13Inline02LayoutHolderComponent,
    T13Inline02SingleLayoutComponent, T13Inline02NotesHolderComponent],
  exports: [Test13RootComponent],
  entryComponents: [Inline01Component, T13Inline02Component],
  providers: [Inline01Service]
})
export class Test13Module {
}
