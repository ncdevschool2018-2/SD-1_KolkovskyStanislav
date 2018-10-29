import {Component} from "@angular/core";
import {Student} from "../models/student";
import {FormsModule} from "@angular/forms";



@Component({
  selector: 'create-student',
  templateUrl:'./create-student.component.html',
  styleUrls:['./create-student.component.css']
})

export class CreateStudentComponent{
  fname:string;
  lname:string;
  mail:string;
  password:string;
  group:string;



  //get student from form and write in database
  student:Student;

  createStudent(){
    this.student = new Student(this.fname,this.lname,this.mail,this.password);
    console.log(this.student)
  }
}
