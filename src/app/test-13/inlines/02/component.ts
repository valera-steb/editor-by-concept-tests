import {Component, OnInit} from '@angular/core';
import {ViewModel} from './viewModel';
import {getModel, getVm} from './data';
import {Model} from './model/model';

@Component({
  styleUrls: ['./component.css'],
  selector: 'app-inline-13-02',
  template: `
    <div class="grid">
      <div class="menu">
        <app-inline-13-02-menu [menu]="vm.menu"></app-inline-13-02-menu>
      </div>
      <div class="tree">
        <app-t13-02-folder *ngFor="let folder of vm.tree"
                           [folder]="folder"></app-t13-02-folder>
      </div>
      <div class="content">
        <app-t13-02-layout-holder [config]="vm.layoutHolder"></app-t13-02-layout-holder>
      </div>
    </div>
  `,
  providers: [
    {provide: Model, useFactory: getModel},
    {provide: ViewModel, useFactory: getVm, deps: [Model]}]
})
export class T13Inline02Component implements OnInit {

  constructor(public vm: ViewModel) {
  }

  ngOnInit() {
  }
}
