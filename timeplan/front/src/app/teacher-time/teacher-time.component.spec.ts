import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTimeComponent } from './teacher-time.component';

describe('TeacherTimeComponent', () => {
  let component: TeacherTimeComponent;
  let fixture: ComponentFixture<TeacherTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
