import {Component, TemplateRef, OnInit} from "@angular/core";
import {Group} from "../../../models/group";
import {Student} from "../../../models/student";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {group} from "@angular/animations";


@Component({
  selector:'groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent implements OnInit{
  choose_group:boolean = false;
  modalRef: BsModalRef;
  selectedGroup:string;
  //Cписок студентов
  students: Student[] ;
  students1: Student[] = [
    ];
  list_group: Group[] = [
    // new Group("Группа 1", this.students),
    // new Group("Группа 2",this.students1),
  ];



  constructor(private modalService: BsModalService) {}


  ngOnInit(){
    //this.list_group = this.groupService.getGroup();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onChange(event, value){
    this.selectedGroup = value;
    console.log(value)
  }

}
