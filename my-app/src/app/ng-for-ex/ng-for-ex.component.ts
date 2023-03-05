import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-ex',
  templateUrl: './ng-for-ex.component.html',
  styleUrls: ['./ng-for-ex.component.css']
})
export class NgForExComponent {
    courses;

    loadCourses(){
        this.courses = [
            {id:1,name:'course1'},
            {id:2,name:'course2'},
            {id:3,name:'course3'},
        ]
    }

    trackCourse(index, course){
        return course? course.id : undefined;
    }

    onAdd(){
        this.courses.push({id:4,name:"course4"});
    }
    onRemove(course){
        let index = this.courses.indexOf(course);
        this.courses.splice(index,1);
        
    }

    onChange(course){
course.name = "update"
        
    }



}