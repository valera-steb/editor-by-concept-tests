import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MenuItem} from './viewModel';

function stub() {
}

@Component({
  styles: ['.top {position: absolute; top: 100%; background: white; z-index: 100;}',
    '.sub {position: absolute; top: 0; left: 100%; background: white; z-index: 100;}',
    '.name { border: black solid 1px; padding: 1px;}'],
  selector: 'app-inline-13-02-menu-item',
  template: `
    <div style="position: relative">
      <div tabindex="-1" class="name"
           (click)="onClick()" (blur)="handlers.blur($event)">{{menu.name}}
      </div>
      <div *ngIf="menu.subMenu && isOpen" [ngClass]="isTopLevel ? 'top' : 'sub'">
        <app-inline-13-02-menu-item *ngFor="let subMenu of menu.subMenu"
                                    [menu]="subMenu" [handlers]="handlers"></app-inline-13-02-menu-item>
      </div>
    </div>
  `
})
export class T13Inline02MenuItemComponent implements OnInit {

  @Input() menu: MenuItem;
  @Input() handlers;
  @Input() isTopLevel = false;

  subClass;
  isOpen = false;
  public isClicked = false;

  @ViewChildren(T13Inline02MenuItemComponent)
  public subMenus: QueryList<T13Inline02MenuItemComponent>;

  constructor() {
  }

  ngOnInit() {
    this.subClass = this.isTopLevel ? 'top' : 'sub';
  }

  onClick() {
    if (this.menu.isInactive)
      return;

    if (this.menu.onClick)
      this.menu.onClick();
    else {
      this.isOpen = true;
      this.isClicked = true;
      this.handlers.click();
    }
  }
}
