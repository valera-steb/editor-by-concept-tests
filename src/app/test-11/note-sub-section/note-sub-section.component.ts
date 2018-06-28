import {Component, Input, OnInit} from '@angular/core';
import {splitText} from '../spliter';

@Component({
  selector: 'app-note-sub-section',
  templateUrl: './note-sub-section.component.html',
  styleUrls: ['./note-sub-section.component.css']
})
export class NoteSubSectionComponent implements OnInit {

  @Input() subSection;

  textSplit;

  constructor() {
  }

  ngOnInit() {
    this.textSplit = splitText(this.subSection);
  }

}
