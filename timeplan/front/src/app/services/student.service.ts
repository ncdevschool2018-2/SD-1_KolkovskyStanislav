import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student";



@Injectable({
  providedIn: 'root'
})

export class StudentService{

  constructor(private http: HttpClient){}

  //Ajax request
  addStudent(student: Student):Observable<Student>{
    return this.http.post<Student>('/api/cs', student);
  }

  deleteStudent(){}

}
