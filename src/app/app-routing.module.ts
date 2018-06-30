import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  //{path: "**", component: HomeComponent},
  {
    path: 'fancy-forms',
    loadChildren: './fancy-forms/fancy-forms.module#FancyFormsModule'
  },
  {
    path: 'other-views',
    loadChildren: './other-views/other-views.module#OtherViewsModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }