import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-swith-case-ex',
  templateUrl: './ng-swith-case-ex.component.html',
  styleUrls: ['./ng-swith-case-ex.component.css']
})
export class NgSwithCaseExComponent {
    viewMode = 'map'


    changeViewMode(val){
        this.viewMode = val
    }
}
