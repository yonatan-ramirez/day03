import { Component, OnInit} from '@angular/core';

class Person{
  // name: string;
  // rating: number;
  // gender: string;
  constructor(public name: string, public gender: string, public rating: number){

  }

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 female = new Person('jane Doe', 'f', 2);
 male = new Person('john Doe', 'm', 4);

 person;

 ngOnInit(){
  this.pickRandomPerson();
 }

 pickRandomPerson(){
  const index = Math.floor(Math.random() * 2 );
  if(!index){
    this.person = this.female;
  }else{
    this.person= this.male;
  }
  console.log(this.person);
 }
 getName(){
   return `Name: ${this.person.name}`;
 }
 switchPerson(){
   if (this.person.gender === 'f'){
     this.person.gender = 'm';
   }else if(this.person.gender==='m'){
     this.person= this.female;
   }else{
     this.pickRandomPerson();
   }

  }
}
