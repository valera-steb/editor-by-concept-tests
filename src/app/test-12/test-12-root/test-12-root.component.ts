import {Component, OnInit} from '@angular/core';
import {notes} from '../notes';
import {splitNotes} from '../spliter';

@Component({
  selector: 'app-test-12-root',
  templateUrl: './test-12-root.component.html',
  styleUrls: ['./test-12-root.component.css']
})
export class Test12RootComponent implements OnInit {

  notes = notes;
  offsets: number[];

  constructor() {
  }

  ngOnInit() {
    this.offsets = splitNotes(this.notes);
  }

}
