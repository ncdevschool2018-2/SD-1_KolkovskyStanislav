import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../services/teacher.service";
import {Teacher} from "../models/teacher";
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  public teacher:Teacher;

  constructor(private teacherService: TeacherService, private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.teacherService.getTeacherByEmail(this.tokenStorage.getUsername()).subscribe(teacher =>{
      this.teacher =teacher;
    })
  }

  getTeacher(){
    this.teacherService.getTeacherByEmail(this.tokenStorage.getUsername()).subscribe(teacher =>{

    })
  }


}
