import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';

import { from } from 'rxjs/internal/observable/from';
import { AnotherModule } from 'src/app/another/another.module';
import { TasksComponent } from './tasks/tasks.component';
import { Task1Component } from './task1/task1.component';
import { TaskComponent } from './task/task.component';


const routes: Routes =[
  {path : "tasks" ,component:TasksComponent, children : [{path : "task1" , component : Task1Component},{path : "task2" , component : TaskComponent}]},
  {path : "anotherComponent", loadChildren : ()=>import('./another/another.module').then(mod=>mod.AnotherModule)}]
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    Task1Component,
    TaskComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
