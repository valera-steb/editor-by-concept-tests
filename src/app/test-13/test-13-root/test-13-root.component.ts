import { Component, OnInit } from '@angular/core';
import {notes} from '../notes';
import {splitNotes} from '../../test-12/spliter';

@Component({
  selector: 'app-test-13-root',
  templateUrl: './test-13-root.component.html',
  styleUrls: ['./test-13-root.component.css']
})
export class Test13RootComponent implements OnInit {

  notes = notes;

  constructor() { }

  ngOnInit() {
  }
}
