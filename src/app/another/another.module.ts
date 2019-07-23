import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherRoutingModule } from './another-routing.module';
import { AnotherComponentComponent } from './another-component/another-component.component';

@NgModule({
  declarations: [AnotherComponentComponent],
  imports: [
    CommonModule,
    AnotherRoutingModule
  ]
})
export class AnotherModule { }
