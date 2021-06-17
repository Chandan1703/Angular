import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionNo2RoutingModule } from './question-no2-routing.module';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentCompComponent,
    ChildCompComponent,
    
  ],
  imports: [
    CommonModule,
    QuestionNo2RoutingModule,
    FormsModule
  ]
})
export class QuestionNo2Module { }
