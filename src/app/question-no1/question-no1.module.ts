import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports:[Page1Component]
})
export class QuestionNo1Module { }
