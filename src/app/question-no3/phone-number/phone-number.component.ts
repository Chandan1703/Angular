import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
 
  public newData:Array<any> = [];
  
  public phonenumbers: any[] = [{
    id: 1,
    phonenumber: '',
    isshow:false
    
  }];
  constructor() {

  }

  ngOnInit() {

  }

  addPhoneNumber() {
    this.phonenumbers.push({
      id: this.phonenumbers.length + 1,
      phonenumber: '',
      isshow:false
     
    });
  }

  removePhoneNumber(i: number) {
    this.phonenumbers.splice(i, 1);
  }

  logValue() {
    console.log(this.phonenumbers);
    this.newData =this.phonenumbers;

    this.newData.forEach( e =>
      {
       e.isshow =true;
      }
    ) 
    
  }

  
}
