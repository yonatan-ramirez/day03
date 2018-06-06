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
heading: string ="Person Details";
person: any ={
  name:{
    first: 'Jane',
    last: 'Doe'
  },
  gender:'f'
};
getInital(){
  if (this.person.gender ==' m'){
    return'mr.';
  }else if (this.person.gender =='f'){
    return'mrs.';
  }else{
    return '';
  }
}
getAddress(){
  if(this.person.adress){
    return this.person.adress;
  }else {
    return '';
  }
}
}
