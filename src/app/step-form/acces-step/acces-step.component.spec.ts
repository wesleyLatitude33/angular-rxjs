import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesStepComponent } from './acces-step.component';

describe('AccesStepComponent', () => {
  let component: AccesStepComponent;
  let fixture: ComponentFixture<AccesStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
