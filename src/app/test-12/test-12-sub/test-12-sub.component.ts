import {Component, Input, OnInit} from '@angular/core';
import {splitText} from '../spliter';

@Component({
  selector: 'app-test-12-sub',
  templateUrl: './test-12-sub.component.html',
  styleUrls: ['./test-12-sub.component.css']
})
export class Test12SubComponent implements OnInit {

  textSplit;

  @Input() subSection;

  constructor() {
  }

  ngOnInit() {
    this.textSplit = splitText(this.subSection);
  }

}
