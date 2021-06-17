import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  @Input() Sequence:number=0
  @Output() nameData = new EventEmitter<object>();
  name:string=''
  showMsg:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  nameSave(){
    if(this.name=='')
    {
      this.showMsg=true
    }
    else{
      this.showMsg=false;
      let obj={name:this.name,sequence:this.Sequence}
      this.nameData.emit(obj);
    }
  }

}
