import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionNo1Module} from './question-no1/question-no1.module'
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
// import {QuestionNo2Module} from './question-no2/question-no2.module'
import {QuestionNo3Module} from './question-no3/question-no3.module'
import {QuestionNo4Module} from './question-no4/question-no4.module'
import {QuestionNo2Module} from './question-no2/question-no2.module'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionNo1Module,
    FormsModule,
    QuestionNo2Module,
    QuestionNo3Module,
    QuestionNo4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
