import { leadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

   inputvalue:number =0;
  msg:string="";

  constructor() { }

  
  ngOnInit(): void {
  }
  OnSave()
  {
   if (this.inputvalue<=0)
    this.msg="Please enter valid value";
    else 
    {
      console.log(this.inputvalue%2);
      let result
     if((this.inputvalue%2)==0)
     {
       result =this.inputvalue*this.inputvalue-1
        
     } 
     else
     {
       result=this.inputvalue*this.inputvalue+1
     }
     this.msg=result.toString()
    }
  }
  
}
