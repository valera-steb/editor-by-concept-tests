import {Component, Input, OnInit} from '@angular/core';
import {splitText} from '../spliter';

@Component({
  selector: 'app-test-12-note',
  templateUrl: './test-12-note.component.html',
  styleUrls: ['./test-12-note.component.css']
})
export class Test12NoteComponent implements OnInit {

  textSplit;

  @Input() note;
  @Input() index;

  constructor() {
  }

  ngOnInit() {
    this.textSplit = splitText(this.note);
  }

}
