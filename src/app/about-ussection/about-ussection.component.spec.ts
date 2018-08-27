import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUssectionComponent } from './about-ussection.component';

describe('AboutUssectionComponent', () => {
  let component: AboutUssectionComponent;
  let fixture: ComponentFixture<AboutUssectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUssectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
