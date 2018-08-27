import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFactssectionComponent } from './company-factssection.component';

describe('CompanyFactssectionComponent', () => {
  let component: CompanyFactssectionComponent;
  let fixture: ComponentFixture<CompanyFactssectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFactssectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFactssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
