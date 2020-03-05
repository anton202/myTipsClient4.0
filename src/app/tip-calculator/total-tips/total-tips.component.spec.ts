import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTipsComponent } from './total-tips.component';

describe('TotalTipsComponent', () => {
  let component: TotalTipsComponent;
  let fixture: ComponentFixture<TotalTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
