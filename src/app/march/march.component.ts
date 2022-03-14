import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

interface Food {
  value: string;
  viewValue: string;
}

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.css']
})
export class MarchComponent implements OnInit {

  
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

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onEnter(evt: any){
    if (evt.source.selected) {
    alert("hello ");
    }
  }
  toggle(){
    debugger;

  }


  @ViewChild('stateInput')
  stateInput!: ElementRef; 
  
  setFocusOn() { 
    this.stateInput.nativeElement.focus();
    
  }



onToggleDropdown() {}

}
