import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'Warning-Message',
    templateUrl: './warning-message.html',
    styleUrls: ['./warning-message.css'],
})
export class WarningMessage{
     NgOnit(){
         
    }
    constructor(){
        
    }
    isHidden = true;
    onSelect(){
        this.isHidden = !this.isHidden;
    }

}