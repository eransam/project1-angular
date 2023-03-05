import { Component } from '@angular/core';
import { AuthorService } from '../Services/author.service';

@Component({
  selector: 'app-authors1',
  templateUrl: './authors1.component.html',
  styleUrls: ['./authors1.component.css']
})
export class Authors1Component {
    title = "authors: ";
    authors;
    // / בתוך הסוגריים של הקונסטרקטור אנו נכניס את כל הפונקציות שהקלאס שלנו תלוי בהם ובמקרה שלנו אנו לתוך הקונסטרקטור את הסרויס שלנו כדי להכיל לתוך המשתנה שלנו את רשימת הקורסים
    constructor(service: AuthorService){
       this.authors = service.getAuthors();
    }
}
