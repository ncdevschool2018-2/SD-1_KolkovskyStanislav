import {Component} from "@angular/core";
import {Student} from "../models/student";

@Component({
  selector: 'create-group',
  templateUrl:'./create-group.component.html',
  styleUrls:['./create-group.component.css']
})

export class CreateGroupComponent{



  students: Student[] = [
    new Student("Stas","Kolkovsky", "stas@gmail.com","12345"),
    new Student("Kostya","Agapotov", "kostya@gmail.com","3545fg"),
    new Student("Ivan","Dolnikov", "ivan@gmail.com","fgfgr3"),
    new Student("Dmitry","Lavrick", "dmitry@gmail.com","1tyt1"),
  ];

  create_students: Student[] =[

  ]

  show_remove_btn:boolean= false;
  show_add_btn:boolean=true;

  addStudent(student){
    this.create_students.push(student);
    this.show_add_btn = false;
    this.show_remove_btn = true;
  }


  removeStudent(){
    this.show_add_btn = true;
    this.show_remove_btn = false;
  }
}
