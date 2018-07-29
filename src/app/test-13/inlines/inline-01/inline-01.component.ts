import {Component, OnInit} from '@angular/core';
import {Inline01Service, TreeFolder} from './inline01service';

@Component({
  selector: 'app-inline-01',
  templateUrl: './inline-01.component.html',
  styleUrls: ['./inline-01.component.css']
})
export class Inline01Component implements OnInit {

  tree: Array<TreeFolder>;
  logs: string[] = [];

  constructor(private service: Inline01Service) {
  }

  ngOnInit() {
    this.service.getTree()
      .then(x => this.tree = x);
  }

}
