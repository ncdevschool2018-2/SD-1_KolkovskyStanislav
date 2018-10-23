import {Component} from "@angular/core";
import {Teacher} from "../models/teacher";
import {Group} from "../models/group";

@Component({
  selector: 'create-timetable',
  templateUrl:'./create-timetable.component.html',
  styleUrls:['./create-timetable.component.css']
})

export class CreateTimetableComponent{


  //Список преподавателей, получаем из БД
  list_teachers: Teacher[] = [
   new Teacher("Ивани","Василенко", "ivan@mail.com", "1234ivan","Математика")
  ];
  //Список предметов для ГРУПП , получаем из БД
  list_subjects: string[] = [
    "Математика",
    "Английский",
    "Физика",
    "Экономика"
  ];
  //CПИСОК ГРУПП
  list_group: Group[] = [];

  choose_group:string;
  choose_teacher:string;


  type:string = null;

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
