import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListDisplayControlComponent } from './job-list-display-control.component';

describe('JobListDisplayControlComponent', () => {
  let component: JobListDisplayControlComponent;
  let fixture: ComponentFixture<JobListDisplayControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobListDisplayControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListDisplayControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
