import {Component} from "@angular/core";
import {Group} from "../../models/group";
import {Student_task} from "../../models/student_task";
import {Teacher} from "../../models/teacher";
import {Subject} from "../../models/subject";

@Component({
  selector: 'table-teacher',
  templateUrl:'./table-teacher.component.html',
  styleUrls:['./table-teacher.component.css']
})


export class TableTeacherComponent {

  //CПИСОК ГРУПП
  list_group: Group[];
  //Запись
  task:Student_task;
  timetable_student: Student_task[];



  //Список преподавателей, получаем из БД
  list_teachers: Teacher[] = [
    new Teacher("Ивани","Василенко", "ivan@mail.com", "1234ivan","Доцент","Математика")
  ];


  //Список предметов для ГРУПП , получаем из БД
  list_subjects: Subject[] = [
    new Subject("Математика"),
    new Subject("Философия"),
    new Subject("Английский"),
    new Subject("Физика"),
  ];


  type:string = null;
  choose_group:boolean;
  choose_teacher:boolean;


  //Choose Type method()
  chooseType(choosetype){
    if(choosetype == "Преподаватель"){
      this.type = "teacher";
      //console.log(choosetype)
    }
    if(choosetype == "Группа"){
      this.type = "group";
      //console.log(choosetype)
    }

  }

  chooseGroup(group){
    if(group != null || group != undefined){
      this.choose_group = group;
      //console.log(group)
    }
  }

  chooseTeacher(teacher){
    if(teacher != null || teacher != undefined){
      this.choose_teacher = teacher
      //console.log(teacher)
    }
  }
}
