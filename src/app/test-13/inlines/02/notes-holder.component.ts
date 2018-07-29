import {Component, Input, OnInit} from '@angular/core';
import {splitNotes} from '../../../test-12/spliter';

@Component({
  styles: [
    '.folder { cursor: pointer; }',
    'li { cursor: pointer; }'],
  selector: 'app-t13-02-notes-holder',
  template: `
    <div class="section" *ngFor="let section of notes; index as sectionIndex;">
      <div>c_{{sectionIndex + 1}}:</div>

      <app-test-12-note *ngFor="let note of section; index as noteIndex;"
                        [note]="note" [index]="offsets[sectionIndex] + noteIndex"></app-test-12-note>
    </div>`
})
export class T13Inline02NotesHolderComponent implements OnInit {

  @Input() notes;
  offsets;

  constructor() {
  }

  ngOnInit() {
    this.offsets = splitNotes(this.notes);
  }

}

