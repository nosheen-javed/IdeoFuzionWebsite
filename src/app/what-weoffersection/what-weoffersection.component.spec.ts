import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeoffersectionComponent } from './what-weoffersection.component';

describe('WhatWeoffersectionComponent', () => {
  let component: WhatWeoffersectionComponent;
  let fixture: ComponentFixture<WhatWeoffersectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeoffersectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeoffersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
