import { Component, OnInit } from '@angular/core';
import {StudentService} from "../services/student.service";
import {TokenStorageService} from "../auth/token-storage.service";
import {Student} from "../models/student";
import {TaskService} from "../services/task.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  public student: Student;

  public days:string[] =["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
  public times:string[] =["9:00-10:20", "10:30-11:50", "12:00-13:20", "13:50-15:10", "15:20-16:40", "16:50-18:10"];
  public timetable:Task[]= [];

  constructor(private studentSevice:StudentService,
              private tokenStorage:TokenStorageService,
              private taskService: TaskService) { }

  ngOnInit() {
    this.studentSevice.getStudentByEmail(this.tokenStorage.getUsername()).subscribe( student =>{
      this.student = student;
      console.log(this.student.group.id);
      this.taskService.getTaskByGroupId(this.student.group.id).subscribe(tasks => {
        this.timetable = tasks as Task[];
        console.log("Timetable loaded!");
        //this.choose_display_group = true;
      })
    })
  }

}
