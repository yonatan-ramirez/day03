import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dangermessage',
  templateUrl: './dangermessage.component.html',
  styleUrls: ['./dangermessage.component.css']
})
export class DangermessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isHidden = true;
  onSelect(){
    this.isHidden = !this.isHidden;
  }
}
