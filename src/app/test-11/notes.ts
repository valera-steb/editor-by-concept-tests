import {ElementRef, HostBinding, QueryList, ViewChildren} from '@angular/core';
import {NoteComponent} from './note/note.component';
import {NoteSubSectionComponent} from './note-sub-section/note-sub-section.component';

export let notes = [
  ['поиск возможных взаимодействий с Dom элементами которые создаёт ангулар.',
    'и да, для начала надо бы сделать отображение этих заметок на экран... пускай пока будет грубой копией рендера в html.',
    'попутно заглянул в *ngFor - там есть версия *ngForOf, которая говорит что принимает NgIterable<T> тип' +
    ' - что это такое, пока не понял.'],

  ['простейший рендер есть.',
    {
      t: 'даже подпункты реализовал.',
      s: ['как например сдесь',
        {
          t: 'даже рекурсивно:',
          s: ['вообще без ограничений, просто для примера до 2-го уровня.']
        }]
    }],

  ['для начала меня заинтерисовал @HostBinding.',
    'Binds a host element property to a directive/component property',
    '@HostBinding(\'childElementCount\') childElementCount; - падает с ошибкой - у элемента нет такого свойства.',
    'выходит тоже самое ограничение.'],

  ['и так, второй заход - @ViewChildren(T)',
    'на app-test11-root добавил @ViewChildren(NoteComponent) viewChildren: QueryList<NoteComponent>;',
    'действительно, в итоге получил список из дочерних компонентов.',
    'вот бы ещё у них прибиндить свойства... а лучше вызов метода getBoundingClientRect().',
    'хотя, скорее лучше просто привязку к элементу, а уж на нём когда надо вызывать буду этот метод.',
    {
      t: 'оказываеться можно подключаться не только по типу, но и по ссылке:',
      s: ['<span #span *ngFor="let sym of textSplit.elements">{{sym}}</span> - в разметке.',
        '@ViewChildren(\'span\') el: QueryList<ElementRef>; - в компоненте получаю список элементов с такой пометкой.']
    },
    'итого - могу добраться как до дочерних компонентов от данного, так и до низлежащих элементов DOM.',
    'однкао - из коробки не вижу навигации вперёд-назад по элементам.',
    'так-же возникает вопрос - а @ViewChildren  вообще все что есть утянет? - т.е. даже если они от вложенных приходят?',
    'а как с порядком следования?',
    {
      t: 'проверю вложенность и порядок:',
      s: ['пометил текст-блоки в заметках и суб секциях',
        'в root компоненте запросил @ViewChildren(\'textBlock\') textBlocks: QueryList<ElementRef>;',
        'и ничего не находит.',
        '+ попробовал в root компоненте @ViewChildren(NoteSubSectionComponent) subSections: QueryList<NoteSubSectionComponent>;',
        'и опять ничего.',
        'вывод - поиск происходит только у непосредственных потомков, в потомки потомков (т.е. рекурсионно) не заглядывает.']
    },
    {
      t: 'несколько ссылок по теме:',
      s: ['https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02',
        'https://stackoverflow.com/questions/38944725/how-to-get-dom-element-in-angular-2',
        'https://netbasal.com/understanding-viewchildren-contentchildren-and-querylist-in-angular-896b0c689f6e',
        'https://medium.com/@kmathy/angular-manipulate-properly-the-dom-with-renderer-16a756508cba']
    }],

  [{
    t: 'теперь остался вопрос про налаживание взаимодействий через сервис:',
    s: ['в документации есть такой пункт: https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service',
      'хотя выглядит не так как я хотел... но существенная оговорка -  ngOnDestroy(){} есть, которая отписыватьеся.']
  },
    'добавляю по ngOnInit, удаляю по ngOnDestroy.',
    'вот только проверить удаление негде... и что будет сохранён порядок.',
    'хотя - порядок отрисовки сохранён.']
];
