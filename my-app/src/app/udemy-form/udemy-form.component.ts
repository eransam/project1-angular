import { Component } from '@angular/core';

@Component({
  selector: 'app-udemy-form',
  templateUrl: './udemy-form.component.html',
  styleUrls: ['./udemy-form.component.css']
})
export class UdemyFormComponent {
    submit(formDetails){
        console.log(formDetails);
        
    }

    contactMethods = [
        {id:1, name:"development"},
        {id:2, name:"art"},
        {id:3, name:"sport"},
    ]
}
