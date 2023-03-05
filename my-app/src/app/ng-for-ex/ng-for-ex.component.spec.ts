import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForExComponent } from './ng-for-ex.component';

describe('NgForExComponent', () => {
  let component: NgForExComponent;
  let fixture: ComponentFixture<NgForExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
