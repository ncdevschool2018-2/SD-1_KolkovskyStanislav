import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../models/task";


@Injectable({
  providedIn: 'root'
})

export class TaskService{


  constructor(private http: HttpClient){}


  public addTask(task:Task):Observable<Task>{
    return this.http.post<Task>("/api/ts/add", task);
  }

  public getTaskByGroupId(id:number):Observable<Task[]>{
    return this.http.get<Task[]>("/api/ts/get/"+id);
  }

  public getTaskByTeacherId(id:number):Observable<Task[]>{
    return this.http.get<Task[]>("/api/ts/get/teacher/" + id);
  }

  public deleteTaskById(id:number):Observable<void>{
    return this.http.delete<void>('/api/ts/delete/'+id);
  }

}
