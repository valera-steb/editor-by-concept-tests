import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-inline-02',
  templateUrl: './inline-02.component.html',
  styleUrls: ['./inline-02.component.css']
})
export class Inline02Component implements OnInit {

  model = {
    name: 'x_name',
    pic: ['pic1', {s: 'x.com', t: 'title'}]
  };

  console = '';

  @ViewChild('logElement') logElement;
  logFile = [];
  logIndex = 0;
  log = m => {
    this.logIndex++;
    this.logFile.push(`${this.logIndex}: ${m}`);
    this.logElement.nativeElement.scrollTo({top: this.logElement.nativeElement.scrollHeight});
    /* tslint:disable */
  };
  /* tslint:enable */

  constructor() {
  }

  ngOnInit() {
  }

  runConsole() {
    /* tslint:disable */
    let m = this.model;
    this.log('C:run console');
    try {
      eval(this.console);
      /* tslint:enable */
      this.console = '';
    } catch (e) {
      this.log('ERR: ' + e.toString());
    }
  }
}
