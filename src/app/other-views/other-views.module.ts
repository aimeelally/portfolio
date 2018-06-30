import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherViewsRoutingModule } from './other-views-routing.module';
import { SomethingComponent } from './something/something.component';

@NgModule({
  imports: [
    CommonModule,
    OtherViewsRoutingModule
  ],
  declarations: [SomethingComponent]
})
export class OtherViewsModule { }
