import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyFormsComponent } from './fancy-forms.component';

describe('FancyFormsComponent', () => {
  let component: FancyFormsComponent;
  let fixture: ComponentFixture<FancyFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
