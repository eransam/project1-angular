import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
    //html כאן אנו יוצרים משתנה שמכיל קבוצה של קונטרולרים אשר נמצאים בפורם בקובץ ה
    form = new FormGroup({
        //required אשר הקונטרולרים האלו הם  html כאן אנו יוצרים שמות של פורם קונטרולס שאותם אנו נקשר לשדות בפורם בקובץ ה 
        username:new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            UsernameValidators.cannotContainSpace    
        ]),
        password:new FormControl('', Validators.required)
    });

    get username(){
        return this.form.get("username")
    }

     
}
