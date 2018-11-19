import {Component, OnInit, TemplateRef} from "@angular/core";
import {Student} from "../../../models/student";
import {Teacher} from "../../../models/teacher";
import {UsersService} from "../../../services/users.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Template} from "@angular/compiler/src/render3/r3_ast";
import {SubjectService} from "../../../services/subject.service";
import {Subject} from "../../../models/subject";


@Component({
  selector:'users',
  templateUrl:"./users.component.html",
  styleUrls:["./users.component.css"],
  providers:[]
})

export class UsersComponent implements OnInit{

  public editMode:boolean =false;
  public students: Student[];
  public teachers: Teacher[];
  public subjects: Subject[];
  public modalRef:BsModalRef;
  public create_student:Student = new Student();
  public create_teacher:Teacher = new Teacher();




  showAll:boolean = true;
  showStundets:boolean = true;
  showTeacher:boolean = true;
  choose_subject:string;

  readonly level_list: string[] = ["Научный сотрудник", "Ассистент", "Доцент", "Профессор"];

  constructor(
              private usersService: UsersService,
              private modalService:BsModalService,
              private subjectService:SubjectService){}

  ngOnInit(){
    this.usersService.getAllTeachers().subscribe(teachers =>{
      this.teachers = teachers as Teacher[];
    })

    this.usersService.getAllStudents().subscribe(students =>{
      this.students = students as Student[];
    });

    this.subjectService.getSubjects().subscribe(subjects =>{
      this.subjects = subjects as Subject[];
    })
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  updateStudent(template: TemplateRef<any>,student: Student):void{
    this.create_student = Student.cloneStudent(student);
    this.editMode = true;
    this.modalRef = this.modalService.show(template);
  }

  public updateTeacher(template: TemplateRef<any>,teacher:Teacher):void{
    this.create_teacher= Teacher.cloneStudent(teacher);
    this.editMode = true;
    this.modalRef = this.modalService.show(template);
  }

  public closeModal():void{
    this.modalRef.hide();
    this.editMode =false;
    this.create_student = new Student();
    this.create_teacher = new Teacher();
  }

  public addStudent(student_account?:Student):void{

     // this.create_student.idstudents = this.calculateIdStudent(this.students.length);
     this.create_student.group = null;
      this.usersService.addStudent(this.create_student).subscribe( ()=>{
        console.log(this.create_student);
        this.updateListStudent();
      })

      // this.create_student.idstudent = student_account.idstudent;
      // this.create_student.group = student_account.group;
      // this.usersService.addStudent(this.create_student).subscribe( ()=>{
      //   console.log(this.create_student);
      //   this.updateListStudent();
      // })

    this.modalRef.hide();
  }

  public editStudent():void{
    this.addStudent();
    this.modalRef.hide();
  }

  public editTeacher():void{
   this.addTeacher();
    this.modalRef.hide();
  }

  public deleteStudent(id_student:number):void{
    this.usersService.deleteStudent(id_student).subscribe(()=>{
      this.updateListStudent();
    })
  }

  private updateListStudent():void {
      this.usersService.getAllStudents().subscribe(students =>{
        this.students = students as Student [];
    })
  }

  public addTeacher(teacher?:Teacher):void{

     // this.create_teacher.id = this.calculateIdTeacher(this.teachers.length);
      for(let i =0; i < this.subjects.length; i++){
        if(this.subjects[i].name == this.choose_subject){
          this.create_teacher.subject = this.subjects[i];
          break;
        }
      }
      //console.log(this.create_teacher);
      this.usersService.addTeacher(this.create_teacher).subscribe(()=>{
        console.log(this.create_teacher);
        this.updateListTeacher();
      })

      // this.create_teacher.idteachers = teacher.idteachers;
      // this.usersService.addTeacher(this.create_teacher).subscribe(()=>{
      //   console.log(this.create_teacher);
      //   this.updateListTeacher();
      // })

    this.modalRef.hide();
  }

  private updateListTeacher():void{
    this.usersService.getAllTeachers().subscribe(teachers =>{
      this.teachers = teachers as Teacher[];
      // this.dataService.changeTeacher(this.teachers);
    })
  }

  public deleteTeacher(id_teacher: number){
    this.usersService.deleteTeacher(id_teacher).subscribe(()=>{
      this.updateListTeacher();
    })
  }

  public updateComponent():void{
    this.usersService.getAllTeachers().subscribe(teachers =>{
      this.teachers = teachers as Teacher[];
    })

    this.usersService.getAllStudents().subscribe(students =>{
      this.students = students as Student[];
    });

    this.subjectService.getSubjects().subscribe(subjects =>{
      this.subjects = subjects as Subject[];
    })
  }

  display(value){
    //console.log(value);
    if(value == "Показать преподавателей"){
      this.showAll = true;
      this.showStundets = true;
      this.showTeacher = false;

    }
    if(value == "Показать студентов"){
      this.showAll = true;
      this.showStundets = false;
      this.showTeacher = true;
    }
  }


}
