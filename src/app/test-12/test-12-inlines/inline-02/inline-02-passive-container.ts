import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-02-passive-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>active container</div>
    <div>name is {{model.name}}</div>
    <app-inline-02-active-item *ngFor="let item of model.pic"
                               [log]="log" [item]="item"></app-inline-02-active-item>
    <button (click)="check()">check</button>`
})
export class Inline02PassiveContainerComponent implements OnInit, DoCheck, OnDestroy {

  @Input() model;
  @Input() log;

  constructor(private _cd: ChangeDetectorRef) {
  }

  check() {
    this._cd.markForCheck();
  }

  ngOnInit() {
    this.log('PC:OnInit');
  }

  ngDoCheck(): void {
    this.log('PC:DoCheck');
  }

  ngOnDestroy(): void {
    this.log('PC:OnDestroy');
  }
}
