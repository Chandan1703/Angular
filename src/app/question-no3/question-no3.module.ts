import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionNo3RoutingModule } from './question-no3-routing.module';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PhoneNumberComponent
  ],
  imports: [
    CommonModule,
    QuestionNo3RoutingModule,
    FormsModule
  ]
})
export class QuestionNo3Module { }
