import {Component, OnInit} from '@angular/core';
import {notes} from '../notes';

@Component({
  selector: 'app-test11-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

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
