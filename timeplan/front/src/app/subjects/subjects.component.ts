import {Component, OnInit, TemplateRef, Input} from "@angular/core";
import {Teacher} from "../models/teacher";
import {Subject} from "../models/subject";
import {SubjectService} from "../services/subject.service";
import {TeacherService} from "../services/teacher.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'subjects',
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.css"]
})

export class SubjectsComponent implements OnInit {

  public subjectForm: FormGroup;
  public teachers: Teacher[];
  public subjects: Subject[];
  public show_alert_add: boolean = false;
  public show_alert_del: boolean = false;
  public show_alert_suc: boolean = false;

  public warning_message: string = "Такой предмет уже есть!";
  public danger_message: string = "Нельзя удалить этот предмет, так как есть преподаватель(и) с этим предметом";
  public succes_message: string = "Предмет успешно удален!";

  constructor(private subjectService: SubjectService,
              private teacherService: TeacherService,
              private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.subjectForm = this.formBuilder.group({
      subjectName: ["", Validators.compose([Validators.minLength(1), Validators.pattern("^[а-яА-ЯёЁ0-9]+$"), Validators.required])]
    });

    this.subjectService.getSubjects().subscribe(subjects => {
      this.subjects = subjects as Subject[];
    });

    this.teacherService.getAllTeachers().subscribe(teachers => {
      this.teachers = teachers as Teacher [];
    });
  }


  public createSubject(): void {
    if (this.subjectForm.valid) {
      let subject: Subject = new Subject();
      subject.name = this.subjectForm.value.subjectName
      if (this.findDuplicates(subject)) {
        this.show_alert_add = true;
      } else {
        this.show_alert_add = false;
        this.subjectService.createSubject(subject).subscribe(() => {
          this.updateListSubjects();
        })
      }
    }
  }


  private findDuplicates(subject: any): any {
    return this.subjects.find(sub => subject.name.toLowerCase() === sub.name.toLowerCase() ? true : false);
  }

  closeAlert(): void {
    this.show_alert_add = false;
    this.show_alert_del = false;
    this.show_alert_suc = false;
  }


  public deleteSubject(subject: Subject): void {
    if (this.validateDelete(subject)) {
      this.show_alert_del = true;
    } else {
      this.show_alert_suc = true;
      this.subjectService.deleteSubject(subject.idsubject).subscribe(() => {
        this.updateListSubjects();
      })
    }
  }

  private validateDelete(subject: Subject): any {
    return this.teachers.some((teacher) => {
      return teacher.subjects.some(teacher_subject => this.equalSubject(teacher_subject, subject))
    });
  }

  equalSubject(subject1, subject2): boolean {
    return subject1.name.toLowerCase() === subject2.name.toLowerCase();
  }


  private updateListSubjects() {
    this.subjectService.getSubjects().subscribe(subjects => {
      this.subjects = subjects as Subject[];
    });
  }
}
