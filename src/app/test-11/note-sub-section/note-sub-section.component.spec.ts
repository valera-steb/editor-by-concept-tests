import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSubSectionComponent } from './note-sub-section.component';

describe('NoteSubSectionComponent', () => {
  let component: NoteSubSectionComponent;
  let fixture: ComponentFixture<NoteSubSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteSubSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
