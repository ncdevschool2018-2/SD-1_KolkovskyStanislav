import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../../../models/group";
import {Student} from "../../../models/student";


@Injectable({
  providedIn: 'root'
})

export class GroupsService {

  constructor(private http: HttpClient){}


  //Ajax request

  addStudentInGroup(student: Student):Observable<Student>{
    return this.http.post<Student>('/api/groups', student);
  }

  deleteStudentFromGroup(){}

  getGroup():Observable<Group[]>{
    return this.http.get<Group[]>('/api/groups');
  }

}
