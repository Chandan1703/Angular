import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
 
  
  @Input() value :number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
