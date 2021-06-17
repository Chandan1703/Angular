import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ParentCompComponent} from './parent-comp/parent-comp.component'
const routes: Routes = [
  {path:'ques2',component:ParentCompComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionNo2RoutingModule { }
