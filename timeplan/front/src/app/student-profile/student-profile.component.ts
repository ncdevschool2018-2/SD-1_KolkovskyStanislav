import { Component, OnInit } from '@angular/core';
import {StudentService} from "../services/student.service";
import {TokenStorageService} from "../auth/token-storage.service";
import {Student} from "../models/student";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  public student: Student;

  constructor(private studentSevice:StudentService, private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.studentSevice.getStudentByEmail(this.tokenStorage.getUsername()).subscribe( student =>{
      this.student = student;
    })
  }

}
