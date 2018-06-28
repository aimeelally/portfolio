import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCaramelloCaserComponent } from './panel-caramello-caser.component';

describe('PanelCaramelloCaserComponent', () => {
  let component: PanelCaramelloCaserComponent;
  let fixture: ComponentFixture<PanelCaramelloCaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCaramelloCaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCaramelloCaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
