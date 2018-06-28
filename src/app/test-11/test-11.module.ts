import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { NoteComponent } from './note/note.component';
import { NoteSubSectionComponent } from './note-sub-section/note-sub-section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RootComponent],
  declarations: [RootComponent, NoteComponent, NoteSubSectionComponent]
})
export class Test11Module { }
