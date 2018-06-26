import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInitialComponent } from './panel-initial.component';

describe('PanelInitialComponent', () => {
  let component: PanelInitialComponent;
  let fixture: ComponentFixture<PanelInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
