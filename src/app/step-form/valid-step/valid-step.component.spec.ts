import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidStepComponent } from './valid-step.component';

describe('ValidStepComponent', () => {
  let component: ValidStepComponent;
  let fixture: ComponentFixture<ValidStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
