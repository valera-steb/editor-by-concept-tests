import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MenuItem} from './viewModel';
import {T13Inline02MenuItemComponent} from './menu-item.component';

@Component({
  styles: ['.container > div { display: inline-block; margin: 2px; border: black 1px solid;}'],
  selector: 'app-inline-13-02-menu',
  template: `
    <div class="container">
      <div *ngFor="let subMenu of menu">
        <app-inline-13-02-menu-item
          [menu]="subMenu" [handlers]="handlers" [isTopLevel]="true"></app-inline-13-02-menu-item>
      </div>
    </div>
  `
})
export class T13Inline02MenuComponent implements OnInit {

  @Input() menu: Array<MenuItem>;
  @ViewChildren(T13Inline02MenuItemComponent) subMenus: QueryList<T13Inline02MenuItemComponent>;

  handlers = {
    blur: event => this.onBlur(),
    click: () => this.onClick()
  };

  private blurTimeout;

  constructor() {
  }

  ngOnInit() {
  }

  onBlur() {
    this.blurTimeout = true;
    setTimeout(
      () => {
        if (this.blurTimeout)
          this.redrawMenu();
      },
      250);
  }

  onClick() {
    this.blurTimeout = false;
    this.redrawMenu();
  }

  redrawMenu() {
    // собственно логика скрытия тут
    const cmd = getItemsToHide(this.subMenus.toArray());

    if (cmd.path)
      cmd.path.forEach(item => item.isClicked = false);

    if ((cmd.close || []).length > 0)
      cmd.close.forEach(item => item.isOpen = false);

    console.log('close', cmd.close);
  }
}

function getItemsToHide(items: Array<T13Inline02MenuItemComponent>) {
  const path = findPathToClickedItem(items) || [];
  console.log('path', path.map(x => x.menu.name));

  const weakSet = new WeakSet(path);

  return {
    path: path,
    close: selectItemsToClose(items, weakSet)
  };
}

function findPathToClickedItem(items: Array<T13Inline02MenuItemComponent>): Array<T13Inline02MenuItemComponent> {
  if (!items)
    return null;

  for (const item of items) {
    const subPath = findPathToClickedItem(item.subMenus.toArray());
    if (subPath)
      return [item].concat(subPath);

    if (item.isClicked)
      return [item];
  }
}

function selectItemsToClose(items: Array<T13Inline02MenuItemComponent>, path: WeakSet<T13Inline02MenuItemComponent>) {
  return items.reduce((previousItem, currentItem) => {
    const subItems = selectItemsToClose(currentItem.subMenus.toArray(), path);
    const newItems = path.has(currentItem) || !currentItem.isOpen
      ? subItems
      : [currentItem].concat(subItems);

    return previousItem.concat(newItems);
  }, []);
}
