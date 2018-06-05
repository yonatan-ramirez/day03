import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'successmessage',
  templateUrl: './successmessage.component.html',
  styleUrls: ['./successmessage.component.css']
})
export class SuccessmessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isHidden = true;
  onSelect(){
    this.isHidden = !this.isHidden;
  }
}
