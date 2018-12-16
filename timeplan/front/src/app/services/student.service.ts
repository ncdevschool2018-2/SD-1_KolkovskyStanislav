import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student";
import {Teacher} from "../models/teacher";



@Injectable({
  providedIn: 'root'
})

export class StudentService{


  constructor(private http: HttpClient){}

  getStudents(page:number):Observable<Student[]>{
    return this.http.get<Student[]>("api/st/list/"+page);
  }

  getPages():Observable<number>{
    return this.http.get<number>('api/st/pages');
  }

  getStudentByEmail(email:string):Observable<Student>{
    return this.http.get<Student>('api/st/email/'+email);
  }

  //Ajax request
  addStudent(student: Student):Observable<Student>{
    return this.http.post<Student>('/api/st/createst', student);
  }

  addStudentsGroup(idgroup:number,students:Student[]):Observable<Student[]>{
    return this.http.post<Student[]>('api/st/adding_group/'+idgroup,students);
  }

  removeStudent(id:number):Observable<Student>{
    return this.http.get<Student>('api/st/gp/remove/'+id);
  }

  getStudentsByGroupId(idgroup:number):Observable<Student[]>{
    return this.http.get<Student[]>('api/st/getst/' + idgroup);
  }

  getAllStudentsNotGroup():Observable<Student[]>{
    return this.http.get<Student[]>("api/st/notgroup");
  }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>('api/st/getst')
  }

  deleteStudent(studentId: number):Observable<void>{
    return this.http.delete<void>('api/st/delete/'+ studentId);
  }
}
