import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelD3Component } from './panel-d3.component';

describe('PanelD3Component', () => {
  let component: PanelD3Component;
  let fixture: ComponentFixture<PanelD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
