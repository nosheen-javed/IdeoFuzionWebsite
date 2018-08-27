import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWesectionComponent } from './why-wesection.component';

describe('WhyWesectionComponent', () => {
  let component: WhyWesectionComponent;
  let fixture: ComponentFixture<WhyWesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyWesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyWesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
