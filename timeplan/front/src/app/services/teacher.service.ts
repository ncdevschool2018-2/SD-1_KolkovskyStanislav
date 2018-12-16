import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student";
import {Teacher} from "../models/teacher";


@Injectable({
  providedIn: 'root'
})

export class TeacherService{

  constructor(private http:HttpClient){}

  getTeachers(page:number):Observable<Teacher[]>{
    return this.http.get<Teacher[]>("api/tr/list/"+page);
  }

  getTeacherByEmail(email:string):Observable<Teacher>{
    return this.http.get<Teacher>("api/tr/email/"+email);
  }

  getPages():Observable<number>{
    return this.http.get<number>('api/tr/pages');
  }

  addTeacher(teacher:Teacher):Observable<Teacher>{
    return this.http.post<Teacher>('api/tr/createtr',teacher);
  }

  getAllTeachers():Observable<Teacher[]>{
    return this.http.get<Teacher[]>('api/tr/gettr');
  }

  deleteTeacher(teacherId: number):Observable<void>{
    return this.http.delete<void>('api/tr/delete/'+teacherId);
  }

  getTeacherByIdSubject(subjectId: number):Observable<Teacher[]>{
    return this.http.get<Teacher[]>('api/tr/get/'+ subjectId);
  }

}
