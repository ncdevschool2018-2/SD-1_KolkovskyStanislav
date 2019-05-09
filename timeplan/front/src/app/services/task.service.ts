import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../models/task";


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  public controllerName: string = "/api/TaskController";

  constructor(private http: HttpClient) {
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.controllerName + "/addTask", task);
  }

  public getTaskByGroupId(id: number): Observable<Task[]> {
    return this.http.get<Task[]>(this.controllerName + "/getTaskByGroup?id=" + id);
  }

  public getTaskByTeacherId(id: number): Observable<Task[]> {
    return this.http.get<Task[]>(this.controllerName + "/getTaskByTeacher?id=" + id);
  }

  public deleteTaskById(id: number): Observable<void> {
    return this.http.delete<void>(this.controllerName + "/deleteTask/" + id);
  }

}
