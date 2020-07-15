import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListControlComponent } from './job-list-control.component';

describe('JobListControlComponent', () => {
  let component: JobListControlComponent;
  let fixture: ComponentFixture<JobListControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobListControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
