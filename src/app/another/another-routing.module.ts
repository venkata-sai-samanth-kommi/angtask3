import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherComponentComponent } from 'src/app/another/another-component/another-component.component';

const routes: Routes = [{path : "",component : AnotherComponentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotherRoutingModule { }
