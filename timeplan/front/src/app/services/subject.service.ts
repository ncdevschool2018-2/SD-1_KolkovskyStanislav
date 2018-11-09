import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Subject} from "../models/subject";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SubjectService{


  constructor(private http: HttpClient){}

  createSubject(subject: Subject):Observable<Subject>{
    return this.http.post<Subject>("/api/sb", subject);
  }

  getSubjects():Observable<Subject[]>{
    return this.http.get<Subject[]>('/api/sb');
  }

  deleteSubject(idsubject:number):Observable<void>{
    return this.http.delete<void>('/api/sb/'+idsubject);
  }

}
