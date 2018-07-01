import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-01',
  templateUrl: './inline-01.component.html',
  styleUrls: ['./inline-01.component.css']
})
export class Inline01Component implements OnInit {

  color = '';

  private colorIndex = 0;
  private colors = ['', 'red', 'green'];

  constructor() {
  }

  ngOnInit() {
  }

  nextColor() {
    this.colorIndex++;
    if (this.colorIndex >= this.colors.length) {
      this.colorIndex = 0;
    }
    this.color = this.colors[this.colorIndex];
  }
}
