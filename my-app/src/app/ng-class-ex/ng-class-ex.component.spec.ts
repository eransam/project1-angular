import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassExComponent } from './ng-class-ex.component';

describe('NgClassExComponent', () => {
  let component: NgClassExComponent;
  let fixture: ComponentFixture<NgClassExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
