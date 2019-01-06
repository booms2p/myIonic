import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDetailPage } from './destination-detail.page';

describe('DestinationDetailPage', () => {
  let component: DestinationDetailPage;
  let fixture: ComponentFixture<DestinationDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
