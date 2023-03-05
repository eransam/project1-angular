import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// גם כדי להשתמש בטו וואי ביינדינג אנו צריכים לייבא לפרוייקט שלנו את הסיפריה הזו
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component.ts/courses.component';
import { CoursesService } from './Services/courses.service';
import { AuthorService } from './Services/author.service';
import { Authors1Component } from './authors1/authors1.component';
import { SummaryPipe } from 'summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { AssignmentTitleCasingComponent } from './assignment-title-casing/assignment-title-casing.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel.component/panel.component';
import { LikesComponent } from './likes/likes.component';
import { NgIfExComponent } from './ng-if-ex/ng-if-ex.component';
import { NgSwithCaseExComponent } from './ng-swith-case-ex/ng-swith-case-ex.component';
import { NgForExComponent } from './ng-for-ex/ng-for-ex.component';
import { NgClassExComponent } from './ng-class-ex/ng-class-ex.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  // כאן אנו רושמים את כל הקומפוננטות השייכות לפרוייקט
  declarations: [
    AppComponent,
    CoursesComponent,
    Authors1Component,
    SummaryPipe,
    FavoriteComponent,
    AssignmentTitleCasingComponent,
    TitleCasePipe,
    PanelComponent,
    LikesComponent,
    NgIfExComponent,
    NgSwithCaseExComponent,
    NgForExComponent,
    NgClassExComponent,
    InputFormatDirective,
    ZippyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
//כאן אנו נירשום את כל הקבצי הפונקציונליות והסרויסים  שהקומפוננטות שלנו משתמשות בהם או תלויות בהם
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
