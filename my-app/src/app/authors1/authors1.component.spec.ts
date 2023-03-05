import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authors1Component } from './authors1.component';

describe('Authors1Component', () => {
  let component: Authors1Component;
  let fixture: ComponentFixture<Authors1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Authors1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Authors1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
