import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student";
import {Teacher} from "../models/teacher";


@Injectable({
  providedIn: 'root'
})

export class UsersService{


  constructor(private http: HttpClient){}

  //Ajax request
  addStudent(student: Student):Observable<Student>{
    return this.http.post<Student>('/api/st/createst', student);
  }

  addTeacher(teacher:Teacher):Observable<Teacher>{
    return this.http.post<Teacher>('api/tr/createtr',teacher);
  }

  getAllStudentsNotGroup():Observable<Student[]>{
    return this.http.get<Student[]>("api/st/notgroup");
  }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>('api/st/getst')
  }

  getAllTeachers():Observable<Teacher[]>{
    return this.http.get<Teacher[]>('api/tr/gettr');
  }

  deleteStudent(studentId: number):Observable<void>{
    return this.http.delete<void>('api/st/delete/'+ studentId);
  }

  deleteTeacher(teacherId: number):Observable<void>{
    return this.http.delete<void>('api/tr/delete/'+teacherId);
  }


}
