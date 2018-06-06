import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first:number = 5;
  // first is the name of "Number = 5" first will be 5
  second:number = 10;
  sumOfNum = this.first + this.second;
  // calling sumOfNum from within the html and adding fist and second will equal 15

  largenumber = Math.max(this.first, this.second);
  // Math.max will know which is the biggest number between first and second, second is the biggest because it is 10
}
