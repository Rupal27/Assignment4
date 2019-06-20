import { Component, OnInit } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() {
    console.log('Parent Constructor');
   }
dates = [new Date().getDate()];
times = [new Date().getTime()];
getDate(){
 
  this.dates.push(new Date().getDate());
  
}
getTime(){
  this.times.push(new Date().getTime());
   
 }
  ngOnInit() {
  }

}
