import {Guid} from 'guid-typescript';

export class ViewModel {
  menu: Array<MenuItem>;
  tree: Array<TreeFolder>;
  layoutHolder: LayoutHolder;
}

export class MenuItem {
  name: string;
  isInactive?: boolean;
  subMenu?: Array<MenuItem>;
  onClick?: () => void;
}


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


export class LayoutHolder {
  isTabsOnRight: boolean;
  type: any;
  layout?: Layout;
  fileViews: Array<FileView>;
  tabGroups: Array<Array<LayoutTab>>;
}

export class Layout {
  addTab: (TreeFile) => void;
}

export class FileView {
  treeFile: TreeFile;
  content: any;
}

export class LayoutTab {
  fileView: FileView;
  isActive: boolean;
  offset: number;
}
