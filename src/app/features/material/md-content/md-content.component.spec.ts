/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MdContentComponent } from './md-content.component';

describe('MdContentComponent', () => {
  let component: MdContentComponent;
  let fixture: ComponentFixture<MdContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
