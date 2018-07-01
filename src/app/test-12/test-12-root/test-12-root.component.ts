import {Component, OnInit} from '@angular/core';
import {notes} from '../notes';

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
    this.offsets = this.notes.reduce((prev, section) => {
      return {
        offsets: prev.offsets.concat(prev.sum),
        sum: prev.sum + section.length
      };
    }, {offsets: [], sum: 1}).offsets;
  }

}
