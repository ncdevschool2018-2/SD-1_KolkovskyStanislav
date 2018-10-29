import {Component, TemplateRef} from "@angular/core";
import {Group} from "../main/models/group";
import {Student} from "../main/models/student";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector:'groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent{



  choose_group:boolean = false;


  //Cписок студентов
  students: Student[] = [
    new Student("Stas","Kolkovsky", "stas@gmail.com","12345"),
    new Student("Kostya","Agapotov", "kostya@gmail.com","3545fg"),
    new Student("Ivan","Dolnikov", "ivan@gmail.com","fgfgr3"),
    new Student("Dmitry","Lavrick", "dmitry@gmail.com","1tyt1"),
  ];

  students1: Student[] = [
    new Student("Stas","Kolkovsky", "stas@gmail.com","12345"),
    new Student("Petya","Gorko", "kostya@gmail.com","3545fg"),
    new Student("Yulia","Polono", "ivan@gmail.com","fgfgr3"),
    new Student("Arni","Pups", "dmitry@gmail.com","1tyt1"),
  ];


  //CПИСОК ГРУПП
  list_group: Group[] = [
    new Group("Группа 1", this.students),
    new Group("Группа 2",this.students1),

  ];


  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
