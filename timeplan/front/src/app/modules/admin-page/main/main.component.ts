import {Component} from "@angular/core";

@Component({
  templateUrl:'./main.component.html',
  styleUrls:['./main.component.css'],
  selector:'main'
})



export class MainComponent{


  create_student:boolean = true;
  create_teacher:boolean = false;
  create_group:boolean = false;
  create_subj:boolean = false;
  table_student:boolean = false;
  table_teacher:boolean = false;

  chooseFunction(contentText){
    contentText == "Создать студента" ? this.create_student = true : this.create_student = false;
    contentText == "Создать преподавателя" ? this.create_teacher = true : this.create_teacher = false;
    contentText == "Создать группу" ? this.create_group = true : this.create_group = false;
    contentText == "Создать предмет" ? this.create_subj = true : this.create_subj = false;
    contentText == "Расписание групп" ? this.table_student = true : this.table_student = false;
    contentText == "Расписание преподавателя" ? this.table_teacher = true : this.table_teacher = false;

  }
}
