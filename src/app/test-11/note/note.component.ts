import {
  AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import {splitText} from '../spliter';
import {TextBoxContainedService} from '../textBoxContained.service';

@Component({
  selector: 'app-test11-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  @Input() note;
  @Input() index;

  @ViewChildren('span') el: QueryList<ElementRef>;

  textSplit;

  constructor(private container: TextBoxContainedService) {
  }

  ngOnInit() {
    this.textSplit = splitText(this.note);
    this.container.add(this);
  }

  ngAfterContentInit(): void {
    // console.log(this.el);
  }

  ngAfterViewInit(): void {
    // console.log(this.el);
  }

  ngOnDestroy(): void {
    this.container.remove(this);
  }
}
