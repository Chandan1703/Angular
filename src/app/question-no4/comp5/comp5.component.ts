import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {
  
  
  @Output() data =new EventEmitter<number>()

  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  Update()
  {
    this.data.emit(this.result)
  }

}
