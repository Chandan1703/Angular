import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

   arr1: any[] = [];
   arr2:any[] = [];
   result:string='';

  constructor() { }

  ngOnInit(): void {
  }
  add(mode:string)
  {
    if(mode=='one')
    {
      this.arr1.push({sequence:this.arr1.length+1,childObject:[]})

    }
    else{
      this.arr2.push({sequence:this.arr2.length+1,childObject:[]})
    }
  }
  getName(event:any)
  {
    this.arr1.forEach((element) => {
      if(element.sequence==event.sequence)
      {
        element.childObject[event.sequence-1]=event.name
      }
    });
  }
  getName1(event:any)
  {
    this.arr2.forEach((element) => {
      if(element.sequence==event.sequence)
      {
        element.childObject[event.sequence-1]=event.name
      }
    });
  }

  ShowData(){
    let string='{x1('
    this.arr1.forEach((element)=>{
       let arr= element.childObject
       arr.forEach(function (arr:number,index: number) {
         console.log(index)
        string =string +arr+','
    });
       
    })
    string.slice(0, -1);
    string=string.slice(0, -1)+'),x2{('
    this.arr2.forEach((element)=>{
      let arr= element.childObject
      arr.forEach(function (arr:number,index: number) {
        console.log(index)
       string =string +arr+','
   });
      
   })
   string=string.slice(0, -1)+')}'
    this.result=string

  }

}
