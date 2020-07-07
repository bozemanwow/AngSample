import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFromDisplayControlComponent } from './job-from-display-control.component';

describe('JobFromDisplayControlComponent', () => {
  let component: JobFromDisplayControlComponent;
  let fixture: ComponentFixture<JobFromDisplayControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFromDisplayControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFromDisplayControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
