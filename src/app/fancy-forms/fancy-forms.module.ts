import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FancyFormsRoutingModule } from './fancy-forms-routing.module';
import { FancyFormsComponent } from './fancy-forms/fancy-forms.component';

@NgModule({
  imports: [
    CommonModule,
    FancyFormsRoutingModule
  ],
  declarations: [FancyFormsComponent]
})
export class FancyFormsModule { }
