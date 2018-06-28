import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInteractiveCvComponent } from './panel-interactive-cv.component';

describe('PanelInteractiveCvComponent', () => {
  let component: PanelInteractiveCvComponent;
  let fixture: ComponentFixture<PanelInteractiveCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelInteractiveCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInteractiveCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
