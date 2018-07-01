import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Root11Component } from './root.component';

describe('Root11Component', () => {
  let component: Root11Component;
  let fixture: ComponentFixture<Root11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Root11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Root11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
