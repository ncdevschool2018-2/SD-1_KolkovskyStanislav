import {Component} from "@angular/core";

@Component({
  selector: 'create-teacher',
  templateUrl:'./create-teacher.component.html',
  styleUrls:['./create-teacher.component.css']
})

export class CreateTeacherComponent{

  readonly level_teacher: string[] = ["Научный сотрудник",
    "Ассистент",
    "Доцент",
    "Профессор"];

  subjects :string[] = ["Математика",
  "Физика", "Английский"]
}
