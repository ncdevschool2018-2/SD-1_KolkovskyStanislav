import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Student} from "../admin-page/main/models/student";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class StudentAccountService{
  constructor(private http: HttpClient){

  }


  saveStudentAccount():Observable<Student>{
    return this.http.get<Student>("/");
  }
}
