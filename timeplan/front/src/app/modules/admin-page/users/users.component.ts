import {Component} from "@angular/core";

@Component({
  selector:'users',
  templateUrl:"./users.component.html",
  styleUrls:["./users.component.css"]
})

export class UsersComponent{

  showAll:boolean = true;
  showStundets:boolean = true;
  showTeacher:boolean = true;





  display(value){
    console.log(value);
    if(value == "Все пользователи"){
      this.showAll = false;
      this.showStundets = true;
      this.showTeacher = true;
    }
    if(value == "Преподаватели"){
      this.showAll = true;
      this.showStundets = true;
      this.showTeacher = false;
    }
    if(value == "Студенты"){
      this.showAll = true;
      this.showStundets = false;
      this.showTeacher = true;
    }
  }
}
