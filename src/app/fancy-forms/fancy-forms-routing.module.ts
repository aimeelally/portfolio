import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FancyFormsComponent } from './fancy-forms/fancy-forms.component';

const routes: Routes = [
  {
    path: '',
    component: FancyFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FancyFormsRoutingModule { }
