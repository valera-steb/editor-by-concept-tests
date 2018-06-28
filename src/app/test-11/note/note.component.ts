import {Component, Input, OnInit} from '@angular/core';
import {splitText} from '../spliter';

@Component({
  selector: 'app-test11-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note;
  @Input() index;

  textSplit;

  constructor() {
  }

  ngOnInit() {
    this.textSplit = splitText(this.note);
  }

}
