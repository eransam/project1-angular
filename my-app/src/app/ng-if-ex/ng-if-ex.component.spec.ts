import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfExComponent } from './ng-if-ex.component';

describe('NgIfExComponent', () => {
  let component: NgIfExComponent;
  let fixture: ComponentFixture<NgIfExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
