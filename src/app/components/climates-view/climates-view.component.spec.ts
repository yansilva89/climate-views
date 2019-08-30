import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatesViewComponent } from './climates-view.component';

describe('ClimatesViewComponent', () => {
  let component: ClimatesViewComponent;
  let fixture: ComponentFixture<ClimatesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimatesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
