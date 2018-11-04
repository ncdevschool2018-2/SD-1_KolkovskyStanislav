import {Component} from "@angular/core";
import {Group} from "../../../../../models/group";
import {Student_task} from "../../../../../models/student_task";
import {Teacher} from "../../../../../models/teacher";
import {Subject} from "../../../../../models/subject";
import {group} from "@angular/animations";

@Component({
  selector: "table-student",
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.css']
})

export class TableStudentComponent{

  //CПИСОК ГРУПП
  list_group: Group[] = [
    new Group("Группа 1"),
    new Group("Группа 2"),
    new Group("Группа 3")
  ];
  //Запись
  task:Student_task;
  timetable_student: Student_task[];

  //Список предметов для ГРУПП , получаем из БД
  list_subjects: Subject[] = [

  ];


  group:string;
  subject:string;

  type:string = null;
  choose_group:boolean = false;
  choose_teacher:boolean;

  ngOnInit(){

  }


  createTimetable(){

  }

  //Choose Type method()
  chooseGroup(group){
    if(group){
      this.choose_group = true;
      console.log(group.name_group);
    }

  }
}
