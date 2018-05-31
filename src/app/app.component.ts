import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
// import { POINT_CONVERSION_COMPRESSED } from 'constants';

class Point{
  x: number;
  y: number;
  constructor(x:number, y:number){
    this.x = y;
    this.y = x;
  
  }
  add(point:Point){
    return new Point(this.x + point.x, this.y + point.y);
  }
}
class Point3D extends Point{
  z: number ;
  constructor(x:number, y:number, z:number){
    super(x,y);
    this.z= z;
  }
}
interface Person{
  firstname: string;
  lastname: string;

  sayHi: ()=> string;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
    // this.classPointTest();
    this.practice2Test();
  }
//  classPointTest(){
//    var p1 = new Point(25,2);
//    var p2 = new Point(30,42);
//    var p3 = p1.add(p2);
//   console.log(p3);
//  }
//  New3Dpoints{
//    var p3D1 = new Point3D(2,4,4);
//    var p3D2 = new Point3D(5,3,1);
//    var p3D3 = p3D1.add(p3D2);
//    console.log(p3D3);
//  }
 practice2Test(){
   const customer:Person= {
     firstname:'Bob',
     lastname: 'Smith',
     sayHi: ():string =>{
       return"Hi there"
      }
   }
   console.log(customer.firstname, customer.lastname,
  customer.sayHi());

  var employee: Person= {
    firstname: " Jamie",
    lastname: "smith",
    sayHi:():string =>{return"Hello!!"}
  }
  console.log(employee.firstname, employee.lastname, employee.sayHi());
 }
}
