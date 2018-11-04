import {Component} from "@angular/core";
import {Student} from "../../../../models/student";
import {GroupService} from "../../../../services/group.service";

@Component({
  selector: 'create-group',
  templateUrl:'./create-group.component.html',
  styleUrls:['./create-group.component.css']
})

export class CreateGroupComponent{



  constructor(private create_group_service:GroupService){}

  students: Student[] = [

  ];

  create_new_group: Student[] =[

  ]

  visible_alert:boolean = false;
  count_choose_student: number = 0;
  student:Student;

  addStudent(student){
    let indexStudent = this.students.indexOf(student);
    console.log(indexStudent);
    this.students[indexStudent].setStatus(true);

    this.count_choose_student++;
  }


  removeStudent(student){
    this.count_choose_student--;
    let indexStudent = this.students.indexOf(student);
    this.students[indexStudent].setStatus(false);

  }

  create_group() {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].getStatus() == true) {
        this.create_new_group.push(this.students[i]);
      }
    }
  }
}
