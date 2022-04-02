import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-april',
  templateUrl: './april.component.html',
  styleUrls: ['./april.component.css']
})
export class AprilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value: any;
  todayDate=new Date();
  ReceiptNumber = '2953';

   lower = 'this is an entirely lowercase string'; 
   upper = this.lower.charAt(0).toUpperCase()+this.lower;
}
