import {Injectable} from '@angular/core';

@Injectable()
export class TextBoxContainedService {
  items: any[] = [];

  add(item) {
    this.items.push(item);
  }

  remove(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
