import {Component} from "@angular/core";
import {Teacher} from "../models/teacher";
import {Student} from "../models/student";

@Component({
  selector: 'create-teacher',
  templateUrl:'./create-teacher.component.html',
  styleUrls:['./create-teacher.component.css']
})

export class CreateTeacherComponent{

  fname:string;
  lname:string;
  mail:string;
  password:string;
  level:string
  subject:string;


  readonly level_teacher: string[] = ["Научный сотрудник",
    "Ассистент",
    "Доцент",
    "Профессор"];

  subjects :string[] = ["Математика",
  "Физика", "Английский"]


  teacher:Teacher;

  createTeacher(){
    this.teacher = new Teacher(this.fname,this.lname,this.mail,this.password,this.level,this.subject);
    console.log(this.teacher);
  }
}
