import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../services/teacher.service";
import {Teacher} from "../models/teacher";
import {TokenStorageService} from "../auth/token-storage.service";
import {Task} from "../models/task";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  public teacher:Teacher;
  public days:string[] =["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
  public times:string[] =["9:00-10:20", "10:30-11:50", "12:00-13:20", "13:50-15:10", "15:20-16:40", "16:50-18:10"];
  public timetable:Task[]= [];

  constructor(private teacherService: TeacherService,
              private tokenStorage:TokenStorageService,
              private taskService:TaskService) { }

  ngOnInit() {
    this.teacherService.getTeacherByEmail(this.tokenStorage.getUsername()).subscribe(teacher =>{
      this.teacher =teacher;
      this.taskService.getTaskByTeacherId(this.teacher.idteacher).subscribe(task =>{
        this.timetable = task as Task[];
      })
    })
  }


}
