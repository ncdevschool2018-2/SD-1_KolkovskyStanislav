import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../models/group";
import {Student} from "../models/student";
import {Subject} from "../models/subject";


@Injectable({
  providedIn: 'root'
})

export class GroupService{

  constructor(private http: HttpClient){}

  createGroup(name:string, students: Student[]):Observable<Group>{
    return this.http.post<Group>('/api/gp/create/'+name, students);
  }

  addSubject(idgroup:number, subjects: Subject[]):Observable<Group>{
    return this.http.post<Group>('/api/gp/addsub/'+idgroup, subjects);
  }

  removeSubjectFromGroup(idgroup:number, idsub:number):Observable<Group>{
    return this.http.get<Group>('/api/gp/remove/'+idgroup+"/"+idsub);
  }

  getAllGroups():Observable<Group[]>{
    return this.http.get<Group[]>('/api/gp/getgp');
  }

  deleteById(idgroup:number):Observable<void>{
    return this.http.delete<void>('/api/gp/delete/'+idgroup);
  }

}
