import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchControlComponent } from './dispatch-control.component';

describe('DispatchControlComponent', () => {
  let component: DispatchControlComponent;
  let fixture: ComponentFixture<DispatchControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
