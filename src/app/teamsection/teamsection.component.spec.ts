import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsectionComponent } from './teamsection.component';

describe('TeamsectionComponent', () => {
  let component: TeamsectionComponent;
  let fixture: ComponentFixture<TeamsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
