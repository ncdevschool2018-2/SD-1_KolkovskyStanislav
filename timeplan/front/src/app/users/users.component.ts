import {Component, OnInit, TemplateRef} from "@angular/core";
import {Student} from "../models/student";
import {Teacher} from "../models/teacher";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Template} from "@angular/compiler/src/render3/r3_ast";
import {SubjectService} from "../services/subject.service";
import {Subject} from "../models/subject";
import { StudentService } from "src/app/services/student.service";
import { TeacherService } from "src/app/services/teacher.service";
import {FormControl} from "@angular/forms";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector:'users',
  templateUrl:"./users.component.html",
  styleUrls:["./users.component.css"]
})

export class UsersComponent implements OnInit{

  public editMode:boolean =false;
  public students:Student[];
  public teachers:Teacher[];
  public subjects:Subject[];
  public choosing_subject:string[];
  public modalRef:BsModalRef;
  public create_student:Student = new Student();
  public create_teacher:Teacher = new Teacher();

  showAll:boolean = true;
  showStundets:boolean = false;
  showTeacher:boolean = true;
  choose_subject:string;

  subject_teacher:Subject[]= [];

  readonly level_list: string[] = ["Научный сотрудник", "Ассистент", "Доцент", "Профессор"];

  public page:number = 0;
  public pages:Array<number> = new Array<number>();
  public countpage:number = 0;


  public page1:number = 0;
  public pages1:Array<number> = new Array<number>();
  public countpage1:number = 0;

  constructor(private loadingService:Ng4LoadingSpinnerService,
              private studentService:StudentService,
              private teacherService:TeacherService,
              private modalService:BsModalService,
              private subjectService:SubjectService){}


  ngOnInit(){

    this.loadingService.show();
    this.getPagesSt();
    this.getStudentPage();
    this.getPageTr();
    this.getTeacherPage();

    this.subjectService.getSubjects().subscribe(subjects =>{
      this.subjects = subjects as Subject[];
      console.log("Helllllll");
      this.loadingService.hide();
    })
  }

  setPage(i){
    this.page = i;
    this.getStudentPage();
  }

  setPage1(i){
    this.page1 = i;
    this.getTeacherPage();
  }


  public getPagesSt(){
    this.studentService.getPages().subscribe(pages =>{
      this.countpage = pages as number;
      console.log("gg1");
      this.pages = new Array<number>();
      for(let i = 0; i < this.countpage; i++){
        this.pages.push(i);
      }
    })
  }
  public getPageTr(){
    this.teacherService.getPages().subscribe(pages =>{
      this.countpage1 = pages as number;
      this.pages1 = new Array<number>();
      console.log("gg1");
      for(let i = 0; i < this.countpage1; i++){
        this.pages1.push(i);
      }
    })
  }
  public getTeacherPage(){
    this.teacherService.getTeachers(this.page1).subscribe(
      teachers => {
        this.teachers = teachers as Teacher[];
        console.log(this.teachers);
      }
    )
  }
  public getStudentPage(){
    this.studentService.getStudents(this.page).subscribe(
      hash =>{
       this.students = hash as Student[];
      }

    )
  }

  openModalSubjectTeacher(template: TemplateRef<any>, teacher:Teacher){
    this.subject_teacher = [];
    this.modalRef = this.modalService.show(template);
    for(let i =0; i< teacher.subjects.length;i++){
      this.subject_teacher.push(teacher.subjects[i]);
    }
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  public updateStudent(template: TemplateRef<any>,student: Student):void{
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

    this.loadingService.show();
     // this.create_student.idstudents = this.calculateIdStudent(this.students.length);
     this.create_student.group = null;
      this.studentService.addStudent(this.create_student).subscribe( ()=>{
        console.log(this.create_student);
        //this.updateListStudent();
        this.getStudentPage();
        this.getPagesSt();
        this.loadingService.hide();
      })
    this.modalRef.hide();

  }

  public editStudent():void{
    this.studentService.addStudent(this.create_student).subscribe( ()=>{
      console.log(this.create_student);
      //this.updateListStudent();
      this.getStudentPage();
      this.getPagesSt();
      this.loadingService.hide();
      this.create_student = new Student();
    })

    this.modalRef.hide();
  }

  public editTeacher():void{
   this.addTeacher();
   this.create_teacher = new Teacher();
    this.modalRef.hide();
  }

  public deleteStudent(id_student:number):void{
    this.studentService.deleteStudent(id_student).subscribe(()=>{
     this.getStudentPage();
     this.getPagesSt();
    })


  }

  public addTeacher(teacher?:Teacher):void{
    this.loadingService.show();
    for(let i = 0; i < this.subjects.length; i++) {
      for (let j = 0; j < this.choosing_subject.length; j++) {
        if (this.subjects[i].name == this.choosing_subject[j]) {
          this.create_teacher.subjects.push(this.subjects[i]);
        }
      }
    }
    this.teacherService.addTeacher(this.create_teacher).subscribe(()=>{
     this.getPageTr();
     this.getTeacherPage();
     this.loadingService.hide();
     this.create_teacher = new Teacher();
    })

    this.modalRef.hide();
  }


  public deleteTeacher(id_teacher: number){
    this.teacherService.deleteTeacher(id_teacher).subscribe(()=>{
      this.getPageTr();
      this.getTeacherPage();
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
