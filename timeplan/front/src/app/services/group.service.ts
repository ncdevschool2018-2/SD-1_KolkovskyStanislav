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
  
  createGroup(group:Group):Observable<Group>{
    return this.http.post<Group>('/api/gp',group);
  }

  getAllGroups():Observable<Group[]>{
    return this.http.get<Group[]>('/api/gp');
  }



  deleteStudent(){}

}
