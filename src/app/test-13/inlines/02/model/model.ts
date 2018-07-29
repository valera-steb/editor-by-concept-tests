import {Guid} from 'guid-typescript';

export class Model extends Array<Folder> {
}

export class Folder {
  id: Guid;
  name: string;
  files?: Array<FileBase>;
  subFolders?: Array<Folder>;
}

export class FileBase {
  id: Guid;
  name: string;
}
