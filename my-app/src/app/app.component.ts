import { Component } from '@angular/core';

@Component({
// שם הקומפוננטה שבעזרת השם הזה אנו נוכל לקבוע ולהכיל אותה בקומפוננטות אחרות
  selector: 'app-root',
//   מה הקומפוננטה הזו מציגה 
  templateUrl: './app.component.html',
//   קובץ עיצוב מקושר
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';
  post = {
    title:"Title",
    isFavorite: true
  }

  onFavoriteChange(eventVal){
    console.log("eventVal: ", eventVal);
  }
}
