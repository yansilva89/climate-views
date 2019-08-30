import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateTodayComponent } from './climate-today.component';

describe('ClimateTodayComponent', () => {
  let component: ClimateTodayComponent;
  let fixture: ComponentFixture<ClimateTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimateTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
