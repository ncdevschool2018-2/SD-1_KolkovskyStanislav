import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../models/group";
import {Student} from "../models/student";


@Injectable({
  providedIn: 'root'
})

export class GroupService{

  constructor(private http: HttpClient){}
  
  createGroup(students:Student[]):Observable<Student[]>{
    return this.http.post<Student[]>('/api/gp',students);
  }

  deleteStudent(){}

}
