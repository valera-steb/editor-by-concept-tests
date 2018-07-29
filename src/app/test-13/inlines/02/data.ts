import {Guid} from 'guid-typescript';
import {notes} from '../../notes';
import {Folder} from './model/model';
import {NoteFile, NoteItem, NoteSection} from './model/noteFile';
import {TreeFolder, ViewModel} from './viewModel';
import {T13Inline02SingleLayoutComponent} from './single-layout.component';


export function getModel(): Array<Folder> {
  return [
    {
      id: Guid.create(),
      name: 'test-13',
      files: [self<NoteFile>({
        id: Guid.create(),
        name: 'notes',
//        notes: convertNoteSections(notes)
        notes: notes
      })]
    },
    {
      id: Guid.create(),
      name: 'demo',
      files: [self<NoteFile>({
        id: Guid.create(),
        name: 'notes',
        notes: [
          ['тут заметки для виду.',
            'что-бы в дереве был ещё один файл.',
            'собственно переключаться между чем что-бы было.']
        ]
      })]
    }
  ];
}

export function getVm(model): ViewModel {
  const vm: ViewModel = {
    menu: [
      {
        name: 'Файл', subMenu: [{name: 'test'}]
      },
      {
        name: 'Вид', subMenu: [
          {
            name: 'Макет', subMenu: [
              {name: 'Одиночный'},
              {name: '2 строки'},
              {name: '2 столбца'},
              {name: 'сетка 2х2'}
            ]
          },
          {
            name: 'Положение вкладок', subMenu: [
              {name: 'С верху', onClick: () => vm.layoutHolder.isTabsOnRight = false},
              {name: 'С боку', onClick: () => vm.layoutHolder.isTabsOnRight = true}
            ]
          }
        ]
      }
    ],

    tree: extractTreeView(model),

    layoutHolder: {
      isTabsOnRight: false,
      type: T13Inline02SingleLayoutComponent,
      fileViews: [],
      tabGroups: [[]]
    }
  };

  return vm;
}

function convertNoteSections(notes_data): Array<NoteSection> {
  return notes_data.reduce((acc, section, index) => {
    return {
      arr: [{
        id: Guid.create(),
        index: index + 1,
        notes: convertNotes(section, acc.offset)
      }].concat(acc.arr),
      offset: acc.offset + section.length
    };
  }, {
    arr: [], offset: 0
  }).arr;
}

function convertNotes(sectionNotes, offset) {
  return sectionNotes.map((note, index) => {
    const isString = typeof note === 'string';
    return {
      id: Guid.create(),
      index: offset + index,
      text: isString ? note : note.t,
      subBlocks: isString ? [] : convertSubBlocks(note.s || [])
    };
  });
}

function convertSubBlocks(subBlocks) {
  return subBlocks.map((sub) => {
    const isString = typeof sub === 'string';
    return {
      id: Guid.create(),
      mark: '•',
      text: isString ? sub : sub.t,
      subBlocks: isString ? [] : convertSubBlocks(sub.s || [])
    };
  });
}


function extractTreeView(data: Array<Folder>): Array<TreeFolder> {
  return data.map(x => ({
    id: x.id,
    name: x.name,
    files: x.files.map(f => ({id: f.id, name: f.name})),
    subFolders: extractTreeView(x.subFolders || [])
  }));
}

function self<T>(s: T): T {
  return s;
}
