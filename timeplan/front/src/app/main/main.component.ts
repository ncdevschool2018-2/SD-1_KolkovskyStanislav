import {Component, OnInit} from "@angular/core";
import {TokenStorageService} from "../auth/token-storage.service";
import {StudentService} from "../services/student.service";
import {TeacherService} from "../services/teacher.service";
import {Teacher} from "../models/teacher";
import {Student} from "../models/student";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector:"main",
  templateUrl:'./main.component.html',
  styleUrls:['./main.component.css']
})

export class MainComponent implements OnInit{

  public role:string;
  public username:string;
  public teacher:Teacher;
  public student:Student;

  constructor(private tokenStorage:TokenStorageService,
              private studentService:StudentService,
              private teacherService:TeacherService,
              private load:Ng4LoadingSpinnerService){

  }

  ngOnInit(): void {
    this.load.show()
    this.getInfoAboutUser();
  }

  public getInfoAboutUser():void{
    this.role = this.tokenStorage.getAuthorities();
    if(this.role === '[ROLE_ADMIN]'){
      this.username = this.tokenStorage.getUsername();
    }else{
      if(this.role === '[ROLE_TEACHER]'){
        this.teacherService.getTeacherByEmail(this.tokenStorage.getUsername()).subscribe(teacher => {
          this.teacher = teacher as Teacher;
          console.log(this.teacher);
          this.load.hide();
        })
      }else{

      }
    }
  }
}
