import {Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-02-active-container',
  template: `
    <div>active container</div>
    <div>name is {{model.name}}</div>
    <app-inline-02-active-item *ngFor="let item of model.pic"
                               [log]="log" [item]="item"></app-inline-02-active-item>`
})
export class Inline02ActiveContainerComponent implements OnInit, DoCheck, OnDestroy {

  @Input() model;
  @Input() log;

  constructor() {
  }

  ngOnInit() {
    this.log('AC:OnInit');
  }

  ngDoCheck(): void {
    this.log('AC:DoCheck');
  }

  ngOnDestroy(): void {
    this.log('AC:OnDestroy');
  }
}
