import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.css']
})
export class MarchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rangemaximum=180;
  rangevalue!: number;
  rangecondition!:boolean;

  phone = new FormControl('', [Validators.required, Validators.nullValidator]);
  
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  getErrorMessageForPhone() {
    if (this.phone.hasError('required')) {
      return 'Please Enter a value!';
    }
    return this.phone.hasError('phone') ? 'Not a valid number' : '';
  }
  range()
  {
    if (this.rangevalue>this.rangemaximum) 
    {
      this.rangecondition = true;
      return "Warning!!! Axis_value>180";  
    } else 
    {
      return ""; 
    }
  }
  rangeOk()
  {
    if (this.rangevalue<=this.rangemaximum) 
    {
      this.rangecondition = true;
      return "Axis_value<180"; 
    } else 
    {
      return "";
    }
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'Cheese', viewValue: 'Cheese'},
    {value: 'Frier', viewValue: 'Frier'},
    {value: 'Ginger', viewValue: 'Ginger'},
    {value: 'Peach', viewValue: 'Peach'},
    {value: 'sugar', viewValue: 'Sugar'},
    {value: 'salt', viewValue: 'Salt'},
    {value: 'egg', viewValue: 'Egg'},
    {value: 'Rice', viewValue: 'Rice'},
    {value: 'Cereals', viewValue: 'Cereals'},
    {value: 'Wheat', viewValue: 'Wheat'},
  ];

}
