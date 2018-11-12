import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Student} from "../models/student";
import {UsersService} from "./users.service";
import {SubjectService} from "./subject.service";
import {Teacher} from "../models/teacher";
import {Subject} from "../models/subject";

@Injectable({
  providedIn : 'root'
})


export class DataService{
  private userService:UsersService;
  private subjectService:SubjectService;

  teachers: Teacher[];
  students: Student[];
  subjects: Subject[];

  constructor(){

  }

  // studentSource = new BehaviorSubject<Student[]>(this.getStudent());
  // teacherSource = new BehaviorSubject<Teacher[]>(this.getTeahcer());
  // subjectSource = new BehaviorSubject<Subject[]>(this.getSubject());
  //
  // currentStudent = this.studentSource.asObservable();
  // currentTeacher = this.teacherSource.asObservable();
  // currentSubject = this.subjectSource.asObservable();

  //
  // getStudent():Student[]{
  //   this.userService.getAllStudents().subscribe(students =>{
  //     this.students = students as Student[];
  //   })
  //   return this.students;
  // }
  //
  // getTeahcer():Teacher[]{
  //   this.userService.getAllTeachers().subscribe(teachers => {
  //     this.teachers = teachers as Teacher[];
  //   })
  //  return this.teachers;
  // }
  //
  // getSubject():Subject[]{
  //   this.subjectService.getSubjects().subscribe(subjects =>{
  //     this.subjects = subjects as Subject[];
  //   })
  //   return this.subjects;
  // }
  //
  //
  // changeStudents(students:Student[]){
  //   this.studentSource.next(students);
  // }
  // changeTeacher(teachers:Teacher[]){
  //   this.teacherSource.next(teachers);
  // }
  // changeSubject(subjects:Subject[]){
  //   this.subjectSource.next(subjects);
  // }
}
