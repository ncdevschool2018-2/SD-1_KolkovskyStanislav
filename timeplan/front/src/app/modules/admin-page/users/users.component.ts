import {Component, OnInit, TemplateRef} from "@angular/core";
import {Student} from "../../../models/student";
import {Teacher} from "../../../models/teacher";
import {UsersService} from "../../../services/users.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Template} from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector:'users',
  templateUrl:"./users.component.html",
  styleUrls:["./users.component.css"]
})

export class UsersComponent implements OnInit{

  public editMode:false;
  public students: Student[];
  public teachers: Teacher[];
  public modalRef:BsModalRef;
  public create_student:Student = new Student();
  public create_teacher:Teacher = new Teacher();


  showAll:boolean = true;
  showStundets:boolean = true;
  showTeacher:boolean = true;

  fname_student:string;
  lname_student:string;
  mail_student:string;
  password_student:string;
  ng_student:string;

  fname_teacher:string;
  lname_teacher:string;
  mail_teacher:string;
  password_teacher:string;
  level_teacher:string;

  readonly level_list: string[] = [
    "Научный сотрудник",
    "Ассистент",
    "Доцент",
    "Профессор"];

  constructor(private usersService: UsersService,
              private modalService:BsModalService){}

  ngOnInit(){
    this.usersService.getAllTeachers().subscribe(teachers =>{
      this.teachers = teachers as Teacher[];
    })

    this.usersService.getAllStudents().subscribe(students =>{
      this.students = students as Student [];
    });
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  closeModal():void{
    this.modalRef.hide;
  }


  addStudent():void{
    this.create_student.idstudents = this.calculateIdStudent(this.students.length);
    this.create_student.fname = this.fname_student;
    this.create_student.lname = this.lname_student;
    this.create_student.email = this.mail_student;
    this.create_student.password = this.password_student;
    this.usersService.addStudent(this.create_student).subscribe( ()=>{
      console.log(this.create_student);
      this.updateListStudent();
    })
  }


  deleteStudent(id_student:number):void{
    this.usersService.deleteStudent(id_student).subscribe(()=>{
      this.updateListStudent();
    })
  }

  private updateListStudent():void {
      this.usersService.getAllStudents().subscribe(students =>{
        this.students = students as Student [];
    })
  }

  private calculateIdStudent(count_student:number):number{
    let id_student:number;
    return count_student > 0 ?  count_student + 1 :  0;
  }

  private calculateIdTeacher(count_teacher:number):number{
    let id_teacher:number;
    return count_teacher > 0 ?  count_teacher + 1 :  0;
  }

  public addTeacher():void{
    this.create_teacher.id = this.calculateIdTeacher(this.teachers.length);
    this.create_teacher.fname = this.fname_teacher;
    this.create_teacher.lname = this.lname_teacher;
    this.create_teacher.email = this.mail_teacher;
    this.create_teacher.password = this.password_teacher;
    this.create_teacher.level = this.level_teacher;
    console.log(this.create_teacher);
    this.usersService.addTeacher(this.create_teacher).subscribe(()=>{
      console.log(this.create_teacher);
      this.updateListTeacher();
    })
  }

  private updateListTeacher():void{
    this.usersService.getAllTeachers().subscribe(teachers =>{
      this.teachers = teachers as Teacher[];
    })
  }

  deleteTeacher(id_teacher: number){
    this.usersService.deleteTeacher(id_teacher).subscribe(()=>{
      this.updateListTeacher();
    })
  }


  display(value){
    //console.log(value);
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
