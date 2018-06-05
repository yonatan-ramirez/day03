import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class Greeting {
  message: string; 
  constructor(message:string){
this.message = message;
  }
  greet (){
    return "Hello, " + this.message;
  }

}
export class AppComponent {
// People(){
// function lastname(){
//   if() = true{
//     let male = 
//   }
// }

// }

}
