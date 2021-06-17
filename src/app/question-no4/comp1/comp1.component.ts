import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  
  comp1:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  renderdate(e:number)
  {
   this.comp1 =e;
  }
}
