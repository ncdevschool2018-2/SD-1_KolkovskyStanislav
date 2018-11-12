import {Component} from "@angular/core";
import {TabsetComponent} from "ngx-bootstrap";
import {Teacher} from "../../models/teacher";
import {Subject} from "../../models/subject";
import {Student} from "../../models/student";

@Component({
  selector:'admin-page',
  templateUrl:'./admin-page.component.html',
  styleUrls:['./admin-page.component.css']
})

export class AdminPageComponent {

  teachers:Teacher[];
  subjects:Subject[];
  students:Student[];


  constructor(){}
}
