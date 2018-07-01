import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Root11Component } from './root/root.component';
import { NoteComponent } from './note/note.component';
import { NoteSubSectionComponent } from './note-sub-section/note-sub-section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [Root11Component],
  declarations: [Root11Component, NoteComponent, NoteSubSectionComponent]
})
export class Test11Module { }
