import {Component, OnInit, TemplateRef} from "@angular/core";
import {Student} from "../models/student";
import {Teacher} from "../models/teacher";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {SubjectService} from "../services/subject.service";
import {Subject} from "../models/subject";
import {StudentService} from "src/app/services/student.service";
import {TeacherService} from "src/app/services/teacher.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'users',
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})

export class UsersComponent implements OnInit {

  public teacherForm: FormGroup;
  public studentForm: FormGroup;
  public students: Student[];
  public teachers: Teacher[];
  public subjects: Subject[];
  public modalRef: BsModalRef;
  public create_student: Student = new Student();
  public create_teacher: Teacher = new Teacher();

  subject_teacher: Subject[] = [];

  readonly level_list: string[] = ["Научный сотрудник", "Ассистент", "Доцент", "Профессор"];

  public page: number = 0;
  public pages: Array<number> = new Array<number>();
  public countpage: number = 0;


  public page1: number = 0;
  public pages1: Array<number> = new Array<number>();
  public countpage1: number = 0;


  public show_alert_del: boolean = false;
  public show_alert_suc: boolean = false;

  public user: string;
  public readonly delete_message: string = " успешно удален!";
  public readonly create_message: string = " успешно создан!";


  constructor(private loadingService: Ng4LoadingSpinnerService,
              private studentService: StudentService,
              private teacherService: TeacherService,
              private modalService: BsModalService,
              private subjectService: SubjectService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.teacherForm = this.formBuilder.group({
      fname: ["", Validators.compose([Validators.minLength(1), Validators.required])],
      lname: ["", Validators.compose([Validators.minLength(1), Validators.required])],
      email: ["", Validators.compose([Validators.minLength(1), Validators.required])],
      password: ["", Validators.compose([Validators.minLength(1), Validators.required])],
      level: ["", Validators.compose([Validators.minLength(1), Validators.required])],
      subjects: ["", Validators.compose([Validators.minLength(1), Validators.required])]
    });

    this.studentForm = this.formBuilder.group({
      fname: ["", Validators.compose([Validators.minLength(1), Validators.required])],
      lname: ["", Validators.compose([Validators.minLength(1), Validators.required])],
      email: ["", Validators.compose([Validators.minLength(1), Validators.required])],
      password: ["", Validators.compose([Validators.minLength(1), Validators.required])]
    });

    this.loadingService.show();
    this.getPagesSt();
    this.getStudentPage();
    this.getPageTr();
    this.getTeacherPage();

    this.subjectService.getSubjects().subscribe(subjects => {
      this.subjects = subjects as Subject[];
      this.loadingService.hide();
    });
  }

  public displayTeacherSubjects(teacher: Teacher): string {
    let str: string = "";
    for (let i = 0; i < teacher.subjects.length; i++) {
      str = str + teacher.subjects[i].name + (i + 1 == teacher.subjects.length ? "" : ", ");
    }
    return str;
  }


  setPage(i) {
    this.page = i;
    this.getStudentPage();
  }

  setPage1(i) {
    this.page1 = i;
    this.getTeacherPage();
  }


  public getPagesSt() {
    this.studentService.getPages().subscribe(pages => {
      this.countpage = pages as number;
      this.pages = new Array<number>();
      for (let i = 0; i < this.countpage; i++) {
        this.pages.push(i);
      }
    })
  }

  public getPageTr() {
    this.teacherService.getPages().subscribe(pages => {
      this.countpage1 = pages as number;
      this.pages1 = new Array<number>();
      for (let i = 0; i < this.countpage1; i++) {
        this.pages1.push(i);
      }
    })
  }

  public getTeacherPage() {
    this.teacherService.getTeachers(this.page1).subscribe(
      teachers => {
        this.teachers = teachers as Teacher[];
      }
    );
  }

  public getStudentPage() {
    this.studentService.getStudents(this.page).subscribe(
      students => {
        this.students = students as Student[];
      }
    );
  }


  openStudentModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openTeacherModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  public closeModal(): void {
    this.modalRef.hide();
    this.create_student = new Student();
    this.create_teacher = new Teacher();
  }

  closeAlert(): void {
    this.show_alert_del = false;
    this.show_alert_suc = false;
  }

  public addStudent(): void {
    this.create_student.group = null;
    if (this.studentForm.invalid) {
      this.show_alert_del = true;
    } else {
      this.studentService.addStudent(this.create_student).subscribe(() => {
        this.show_alert_suc = true;
        this.getStudentPage();
        this.getPagesSt();
        this.loadingService.hide();
        this.create_student = new Student();
      })
      this.modalRef.hide();
    }
  }

  public deleteStudent(id_student: number): void {
    this.studentService.deleteStudent(id_student).subscribe(() => {
      this.getStudentPage();
      this.getPagesSt();
    })
  }

  public addTeacher(): void {
    if (this.teacherForm.invalid) {
      this.show_alert_del = true;
    } else {
      let choosenSubjects = this.teacherForm.value.subjects;
      this.create_teacher.subjects = this.subjects.filter(subject => choosenSubjects.includes(subject.name));
      this.teacherService.addTeacher(this.create_teacher).subscribe(() => {
        this.show_alert_suc = true;
        this.getPageTr();
        this.getTeacherPage();
        this.create_teacher = new Teacher();
      })
      this.modalRef.hide();
    }
  }

  public deleteTeacher(id_teacher: number) {
    this.teacherService.deleteTeacher(id_teacher).subscribe(() => {
      this.getPageTr();
      this.getTeacherPage();
    })
  }
}
