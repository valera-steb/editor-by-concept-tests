import {Component, Input, OnInit} from '@angular/core';
import {FileView, Layout, LayoutHolder, LayoutTab, TreeFile, ViewModel} from './viewModel';
import {FileBase, Folder, Model} from './model/model';
import {Guid} from 'guid-typescript';

@Component({
  styles: [
    '.grid { display: grid; grid-template-rows: 50px auto;}',
    '.content-slim {grid-row: 2;}',
    '.content-wide {grid-row: 1/3;}',
    '.tabs {grid-column: 1; border: black 1px solid;}'],
  selector: 'app-t13-02-single-layout',
  template: `
    <div *ngIf="!isTabsOnRight" class="tabs">вкладки открытых файлов - для режима отображения "с верху"</div>
    <div [ngClass]="isTabsOnRight ? 'content-wide' : 'content-slim'">
      <app-t13-02-notes-holder
        *ngIf="active"
        [notes]="active.fileView.content.notes"></app-t13-02-notes-holder>
    </div>
  `
})
export class T13Inline02SingleLayoutComponent implements OnInit, Layout {

  @Input() isTabsOnRight: boolean;
  active: LayoutTab;

  constructor(private model: Model, private vm: ViewModel) {
  }

  ngOnInit() {
  }

  addTab(treeFile: TreeFile) {
    console.log('add file in T13Inline02SingleLayoutComponent', treeFile);
    const layoutHolder = this.vm.layoutHolder;
    const cmd = findFile(treeFile, this.model, layoutHolder, this.active);

    switch (cmd.key) {
      case CmdType.active:
        // непонятно пока что... тут только уведомить компонент отображающий вкладки что может надо отскроллиться к этой.
        return;

      case CmdType.fromModel:
        layoutHolder.fileViews.push(cmd.tab.fileView);
      // tslint:disable-next-line no-switch-case-fall-through
      case CmdType.fromVm:
        layoutHolder.tabGroups[0].push(cmd.tab);
      // tslint:disable-next-line no-switch-case-fall-through
      case CmdType.fromGroup:
        if (this.active)
          this.active.isActive = false;
        this.active = cmd.tab;
        cmd.tab.isActive = true;
        break;

      default:
        throw new Error(`Unknown key ${CmdType[cmd.key]}`);
    }
  }
}

enum CmdType {
  active, fromGroup, fromVm, fromModel
}

class Cmd {
  tab?: LayoutTab;
  key: CmdType;
}

function findFile(treeFile: TreeFile, model: Model, layoutHolder: LayoutHolder, activeTeb: LayoutTab): Cmd {
  if (activeTeb && activeTeb.fileView.treeFile.id.equals(treeFile.id))
    return {key: CmdType.active};

  const fromGroup = any(
    layoutHolder.tabGroups[0],
    (x: LayoutTab) => x.fileView.treeFile.id.equals(treeFile.id));
  if (fromGroup)
    return {tab: fromGroup, key: CmdType.fromGroup};

  const fromVm = any(
    layoutHolder.fileViews,
    (x: FileView) => x.treeFile.id.equals(treeFile.id));
  if (fromVm)
    return {tab: buildTab(fromVm), key: CmdType.fromVm};

  const fromModel = searchInFolder(model, treeFile.id);
  if (fromModel)
    return {
      tab: buildTab({treeFile: treeFile, content: fromModel}),
      key: CmdType.fromModel
    };

  throw new Error(`file ${treeFile.name} with id ${treeFile.id} not found.`);
}

function any<T>(arr: Array<T>, f: (T) => boolean): T {
  if (!arr) return;

  for (const obj of arr)
    if (f(obj))
      return obj;
}

function first<T>(arr: Array<T>, f: (T) => T): T {
  if (!arr) return;

  for (const obj of arr) {
    const found = f(obj);
    if (found)
      return found;
  }
}

function searchInFolder(model: Array<Folder>, fileId: Guid) {
  return first<Folder>(
    model,
    (folder: Folder) => {
      return any<Folder>(folder.files, (file: FileBase) => file.id.equals(fileId)) ||
        searchInFolder(folder.subFolders, fileId);
    });
}

function buildTab(fv: FileView): LayoutTab {
  return {
    fileView: fv,
    isActive: true,
    offset: 0
  };
}
