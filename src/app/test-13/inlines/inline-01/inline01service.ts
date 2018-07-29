import {Guid} from 'guid-typescript';
import {Injectable} from '@angular/core';


export class TreeFolder {
  id: Guid;
  name: string;
  subFolders?: Array<TreeFolder>;
  files?: Array<TreeFile>;
}

export class TreeFile {
  id: Guid;
  name: string;
}

@Injectable()
export class Inline01Service {
  getTree(): Promise<Array<TreeFolder>> {
    return Promise.resolve([
      {
        id: Guid.create(),
        name: 'test-12',
        files: [{id: Guid.create(), name: 'notes'}]
      },
      {
        id: Guid.create(),
        name: 'test-13',
        files: [{id: Guid.create(), name: 'notes'}]
      }
    ]);
  }
}
