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
    return this.http.post<Group>('/api/gp/creategp',group);
  }

  getAllGroups():Observable<Group[]>{
    return this.http.get<Group[]>('/api/gp/getgp');
  }

  deleteById(idgroup:number):Observable<void>{
    return this.http.delete<void>('/api/gp/delete/'+idgroup);
  }

}
