import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWorksectionComponent } from './sample-worksection.component';

describe('SampleWorksectionComponent', () => {
  let component: SampleWorksectionComponent;
  let fixture: ComponentFixture<SampleWorksectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleWorksectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleWorksectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
