import {Component, Input, OnInit} from '@angular/core';
import {TreeFile, TreeFolder} from './inline01service';

@Component({
  styles: [
    '.folder { cursor: pointer; }',
    'li { cursor: pointer; }'],
  selector: 'app-inline-01-folder',
  template: `
    <div class="folder" (click)="onFolderClick()">{{folder.name}}</div>
    <div *ngIf="isOpen">
      <div *ngFor="let subFolder of folder.subFolders">
        <app-inline-01-folder [folder]="subFolder"></app-inline-01-folder>
      </div>
      <ul>
        <li *ngFor="let file of folder.files"
        (click)="onFileClick(file)">{{file.name}}</li>
      </ul>
    </div>
  `
})
export class Inline01FolderComponent implements OnInit {

  @Input() folder: TreeFolder;
  @Input() logs: string[];
  isOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  onFolderClick() {
    this.isOpen = !this.isOpen;
    this.logs.splice(0, 0, `folder click: ${this.isOpen ? 'open' : 'close'}`);
  }

  onFileClick(file: TreeFile) {
    this.logs.splice(0, 0, `file click ` + file.name);
  }
}
