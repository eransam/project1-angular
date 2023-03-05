import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTitleCasingComponent } from './assignment-title-casing.component';

describe('AssignmentTitleCasingComponent', () => {
  let component: AssignmentTitleCasingComponent;
  let fixture: ComponentFixture<AssignmentTitleCasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentTitleCasingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentTitleCasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
