import {AfterViewInit, Component, ContentChildren, ElementRef, HostBinding, OnInit, QueryList, ViewChildren} from '@angular/core';
import {notes} from '../notes';
import {NoteComponent} from '../note/note.component';
import {NoteSubSectionComponent} from '../note-sub-section/note-sub-section.component';
import {TextBoxContainedService} from '../textBoxContained.service';

@Component({
  selector: 'app-test11-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  providers: [TextBoxContainedService]
})
export class RootComponent implements OnInit, AfterViewInit {

  notes = notes;
  offsets: number[];

  @ViewChildren(NoteComponent) viewChildren: QueryList<NoteComponent>;
  @ViewChildren('textBlock') textBlocks: QueryList<ElementRef>;
  @ViewChildren(NoteSubSectionComponent) subSections: QueryList<NoteSubSectionComponent>;

  constructor(private container: TextBoxContainedService) {
  }

  ngOnInit() {
    this.offsets = this.notes.reduce((prev, section) => {
      return {
        offsets: prev.offsets.concat(prev.sum),
        sum: prev.sum + section.length
      };
    }, {offsets: [], sum: 1}).offsets;
  }

  ngAfterViewInit(): void {
    console.log(this.textBlocks);
    console.log(this.subSections);
  }

  logTextBlocks() {
    console.log(this.container.items);
  }
}
