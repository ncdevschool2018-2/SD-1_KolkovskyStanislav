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


  message_fname:string;
  message_lname:string;
  message_email:string;
  message_password:string;



  //get student from form and write in database
  student = new Student(this.fname,this.lname,this.mail,this.password);

  checkInputData():string[]{
    this.fname == undefined ? this.message_fname = "Требуется ввести имя":
      this.message_fname = "Введенное поле верно";
    return
  }

  //test function
  display(){
    console.log(this.student);
  }
}
