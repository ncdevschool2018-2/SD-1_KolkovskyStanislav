import {Component, OnInit} from "@angular/core";
import {Task} from "../models/task";
import {TaskService} from "../services/task.service";
import {TokenStorageService} from "../auth/token-storage.service";


@Component({
  selector: 'student-page',
  templateUrl: './student-page.component.html',
  styleUrls:['./student-page.component.css']
})

export class StudentPageComponent implements OnInit{



  public timetable:Task[]= [];
  public days:string[] =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  public times:string[] =["9:00-10:20", "10:30-11:50", "12:00-13:20", "13:50-15:10", "15:20-16:40", "16:50-18:10"];

  constructor(private taskService:TaskService, private tokenStorage:TokenStorageService){

  }

  ngOnInit(): void {
    this.getTaskByGroup(this.tokenStorage.getUsername());
  }

  public getTaskByGroup(username:string):void{

  }
}
