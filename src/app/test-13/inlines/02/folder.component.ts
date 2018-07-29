import {Component, Input, OnInit} from '@angular/core';
import {TreeFile, TreeFolder, ViewModel} from './viewModel';

@Component({
  styles: [
    '.folder { cursor: pointer; }',
    'li { cursor: pointer; }'],
  selector: 'app-t13-02-folder',
  template: `
    <div class="folder" (click)="onFolderClick()">{{folder.name}}</div>
    <div *ngIf="isOpen">
      <div *ngFor="let subFolder of folder.subFolders">
        <app-inline-01-folder [folder]="subFolder"></app-inline-01-folder>
      </div>
      <ul>
        <li *ngFor="let file of folder.files"
            (click)="onFileClick(file)">{{file.name}}
        </li>
      </ul>
    </div>
  `
})
export class T13Inline02FolderComponent implements OnInit {

  @Input() folder: TreeFolder;
  isOpen = false;

  constructor(private vm: ViewModel) {
  }

  ngOnInit() {
  }

  onFolderClick() {
    this.isOpen = !this.isOpen;
  }

  onFileClick(file: TreeFile) {
    this.vm.layoutHolder.layout.addTab(file);
  }
}
