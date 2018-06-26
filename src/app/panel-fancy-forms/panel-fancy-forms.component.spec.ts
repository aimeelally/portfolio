import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFancyFormsComponent } from './panel-fancy-forms.component';

describe('PanelFancyFormsComponent', () => {
  let component: PanelFancyFormsComponent;
  let fixture: ComponentFixture<PanelFancyFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelFancyFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFancyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
