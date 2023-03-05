import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwithCaseExComponent } from './ng-swith-case-ex.component';

describe('NgSwithCaseExComponent', () => {
  let component: NgSwithCaseExComponent;
  let fixture: ComponentFixture<NgSwithCaseExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwithCaseExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwithCaseExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
