import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {splitText} from '../spliter';
import {TextBoxContainedService} from '../textBoxContained.service';

@Component({
  selector: 'app-note-sub-section',
  templateUrl: './note-sub-section.component.html',
  styleUrls: ['./note-sub-section.component.css']
})
export class NoteSubSectionComponent implements OnInit, OnDestroy {

  @Input() subSection;

  textSplit;

  constructor(private container: TextBoxContainedService) {
  }

  ngOnInit() {
    this.textSplit = splitText(this.subSection);
    this.container.add(this);
  }

  ngOnDestroy(): void {
    this.container.remove(this);
  }
}
