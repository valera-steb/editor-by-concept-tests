import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Layout, LayoutHolder} from './viewModel';

@Component({
  styles: [
    '.grid { display: grid; grid-template-columns: auto 150px;}',
    '.grid div:first-child {border: black 1px solid;}',
    '.content-slim {grid-column: 1;}',
    '.content-wide {grid-column: 1/3;}',
    '.tabs {grid-column: 2;}'],
  selector: 'app-t13-02-layout-holder',
  template: `
    <div class="grid">
      <div [ngClass]="config.isTabsOnRight ? 'content-slim' : 'content-wide'">
        <app-t13-02-single-layout #layout
          [isTabsOnRight]="config.isTabsOnRight"></app-t13-02-single-layout>
      </div>
      <div class="tabs"
           *ngIf="config.isTabsOnRight">вкладки открытых файлов - для режима отображения "с боку"
      </div>
    </div>
  `
})
export class T13Inline02LayoutHolderComponent implements OnInit, AfterViewInit {

  @Input() config: LayoutHolder;
  @ViewChild('layout') layout: Layout;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.config.layout = this.layout;
  }
}
