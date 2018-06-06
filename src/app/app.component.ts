import { Component } from '@angular/core';
import {  } from '../app/warning-message/warning-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' My app';

  componentSelected: boolean = false;
  // selectedComponent;
  index: number;
  
  selectComponent(){
    this.componentSelected = true;
    this.index = Math.floor(Math.random() + 3);
    console.log('index', this.index);
  //   if(index ===0){
  //     // this.selectedComponent= 'warning';
  //     console.log('display warning message component ');
  //   }else if( index ===1 ){
  //     // this.selectedComponent = 'success';
  //     console.log('display success message component');

  //   }else if (index===2 ){
  //     // this.selectedComponent='danger';
  //     console('display danger message component');
  //   }
  }

}