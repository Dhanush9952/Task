import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-may',
  templateUrl: './may.component.html',
  styleUrls: ['./may.component.css']
})
export class MayComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  M_Consultation: any = 0;
  
  hideZero(event: any) {
    if (event.target.value == '' || event.target.value == 0) {
      this.M_Consultation = '';
    }
  }
  showZero() {
    if (this.M_Consultation == '' || this.M_Consultation == 0) {
      this.M_Consultation = 0;
    }
  }
}
