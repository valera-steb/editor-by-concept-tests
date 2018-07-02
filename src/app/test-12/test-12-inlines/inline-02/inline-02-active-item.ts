import {Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-02-active-item',
  template: `
    <div>
      <span *ngIf="isString; else elseSpan">{{item}}</span>
      <ng-template #elseSpan>
        {{item.t}} - {{item.s}}
      </ng-template>
    </div>`
})
export class Inline02ActiveItemComponent implements OnInit, DoCheck, OnDestroy {

  @Input() item;
  @Input() log;

  isString;

  constructor() {
  }

  ngOnInit() {
    this.log('AI:OnInit');
    this.isString = typeof this.item === 'string';
  }

  ngDoCheck(): void {
    this.log('AI:DoCheck');
  }

  ngOnDestroy(): void {
    this.log('AI:OnDestroy');
  }
}
