import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItemDisplayComponent } from './job-item-display.component';

describe('JobItemDisplayComponent', () => {
  let component: JobItemDisplayComponent;
  let fixture: ComponentFixture<JobItemDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobItemDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
