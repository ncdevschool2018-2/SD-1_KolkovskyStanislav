import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTimeComponent } from './student-time.component';

describe('StudentTimeComponent', () => {
  let component: StudentTimeComponent;
  let fixture: ComponentFixture<StudentTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
