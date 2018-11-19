import {Component, TemplateRef, OnInit} from "@angular/core";
import {Group} from "../../../models/group";
import {Student} from "../../../models/student";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {group} from "@angular/animations";
import {UsersService} from "../../../services/users.service";
import {GroupService} from "../../../services/group.service";
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular


@Component({
  selector:'groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent implements OnInit{


  count_choose_student: number = 0;
  choose_group:boolean = false;
  modalRef: BsModalRef;
  selectedGroup:string;

  group:Group = new Group();
  student_not_group:Student[];
  student_list:Student[];
  group_list:Group[];
  new_group:Student[];

  constructor(private modalService: BsModalService, private userService: UsersService,
              private groupService: GroupService) {}


  ngOnInit(){

    this.userService.getAllStudents().subscribe(students =>{
      this.student_list = students as Student[];
    })

    this.userService.getAllStudentsNotGroup().subscribe(students=>{
      this.student_not_group = students as Student[];

    })

    this.groupService.getAllGroups().subscribe(groups =>{
      this.group_list = groups as Group[];
    })
  }

  public openModal(template: TemplateRef<any>):void {
    this.modalRef = this.modalService.show(template);
  }

  public onChange(event, value):void{
    this.selectedGroup = value;
    console.log(value)
  }


  public showGroup:boolean = false;
  public create_mode:boolean = false;


  //Buisness logic of creating group of STUDENTS
  public addStudent(student:Student):void{
    console.log(this.selectedGroup);
    let indexStudent = this.student_not_group.indexOf(student);
    console.log(" index: " + indexStudent + " id:" + student.idstudent);
    this.student_not_group[indexStudent].choosen = true;
    this.count_choose_student++;
  }

  public removeStudent(student:Student):void{
    this.count_choose_student--;
    let indexStudent = this.student_not_group.indexOf(student);
    this.student_not_group[indexStudent].choosen = false;
  }

  public create_group():void {
    this.group.name = this.selectedGroup;
    for (let i = 0; i < this.student_not_group.length; i++) {
      if (this.student_not_group[i].choosen == true) {
        this.group.student_list.push(this.student_not_group[i]);
        // this.student_not_group[i].group = this.group;
        // this.userService.addStudent(this.student_not_group[i]).subscribe(()=>{
        //   console.log(this.student_list[i]);
        // })
      }
    }

    for(let i = 0; i < this.group.student_list.length;i++){
      console.log(this.group.student_list[i]);
    }

    this.groupService.createGroup(this.group).subscribe(()=>{
      console.log(this.group);
    })
    this.updateListStudent();

  }

  private updateListStudent():void {
    this.userService.getAllStudents().subscribe(students =>{
      this.student_list = students as Student [];
    })
  }

  public deleteGroup(id:number):void{
    this.groupService.deleteById(id).subscribe(()=>{
      console.log("Succsess delete!")
      this.ngOnInit();
    })
  }

}
