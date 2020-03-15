import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftIncomeComponent } from './shift-income.component';

describe('ShiftIncomeComponent', () => {
  let component: ShiftIncomeComponent;
  let fixture: ComponentFixture<ShiftIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
