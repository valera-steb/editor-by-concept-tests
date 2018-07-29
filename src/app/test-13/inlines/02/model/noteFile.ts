import {Guid} from 'guid-typescript';
import {FileBase} from './model';

export class NoteFile extends FileBase {
  notes: Array<any>;
}

export class NoteSection {
  id: Guid;
  index: number;
  notes: Array<NoteItem>;
}

export class NoteItem {
  id: Guid;
  index: number;
  text: string;
  subBlocks?: Array<NoteSubBlock>;
}

export class NoteSubBlock {
  id: Guid;
  mark: string;
  text: string;
  subBlocks?: Array<NoteSubBlock>;
}
