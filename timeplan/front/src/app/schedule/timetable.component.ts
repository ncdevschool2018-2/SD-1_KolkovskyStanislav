import {Component, OnInit, TemplateRef} from "@angular/core";
import {TaskService} from "../services/task.service";
import {StudentService} from "../services/student.service";
import {TeacherService} from "../services/teacher.service";
import {GroupService} from "../services/group.service";
import {Group} from "../models/group";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Subject} from "../models/subject";
import {SubjectService} from "../services/subject.service";
import {Teacher} from "../models/teacher";
import {Task} from "../models/task";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgModel} from "@angular/forms";

@Component({
  selector: "timetable",
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})

export class TimetableComponent implements OnInit {

  public modalRef: BsModalRef;
  public groups: Group[];
  public subjects: Subject[];
  public teachers: Teacher[] = [];
  public list_teacher: Teacher[] = [];
  public timetable: Task[] = [];
  public task: Task = new Task();

  public choose_group: string;
  public choose_subject: string;
  public choose_day: string;
  public choose_time: string;
  public choose_teacher: string;

  public days: string[] = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
  public times: string[] = ["9:00-10:20", "10:30-11:50", "12:00-13:20", "13:50-15:10", "15:20-16:40", "16:50-18:10"];

  public choose_display_group: boolean = false;
  public choose_display_teacher: boolean = false;
  public display_show: boolean = false;
  public display_show1: boolean = false;
  public show_alert: boolean = false;
  public formGroup: FormGroup;
  public taskForm: FormGroup;

  constructor(private taskService: TaskService,
              private studentService: StudentService,
              private teacherService: TeacherService,
              private groupService: GroupService,
              private modalService: BsModalService,
              private subjectService: SubjectService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      name: ["", Validators.compose([Validators.required])]
    });

    this.taskForm = this.formBuilder.group({
      day: ["", Validators.compose([Validators.required])],
      time: ["", Validators.compose([Validators.required])],
      group: [this.choose_group, Validators.compose([Validators.required])],
      subject: ["", Validators.compose([Validators.required])],
      teacher: ["", Validators.compose([Validators.required])]
    });

    this.formGroup.statusChanges.subscribe(status => console.log(status));


    this.groupService.getAllGroups().subscribe(groups => {
      this.groups = groups as Group[];
    });

    this.teacherService.getAllTeachers().subscribe(teachers => {
      this.list_teacher = teachers as Teacher[];
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  public setTeacher(teacher){
    this.task.teacher = teacher;
  }

  public showGroup(): void {
    this.display_show = true;
    this.display_show1 = false;
    this.choose_display_teacher = false;
    this.choose_display_group = false;
  }

  public showTeacher(): void {
    this.display_show1 = true;
    this.display_show = false;
    this.choose_display_teacher = false;
    this.choose_display_group = false;
  }


  public alertModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  public getListSubject(): void {
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].name == this.choose_group) {
        this.task.group = this.groups[i];
        this.subjectService.getSubjectsByGroupId(this.groups[i].id).subscribe(subject => {
          this.subjects = subject as Subject[];
        });
      }
    }
  }

  public getListTeacher(choose_subject): void {
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].name.toLowerCase() == choose_subject.toLowerCase()) {
        this.task.subject = this.subjects[i];
        this.teacherService.getTeacherByIdSubject(this.subjects[i].idsubject).subscribe(teachers => {
          this.teachers = teachers as Teacher[];
          //todo refactoring
          if (this.teachers.length == 0) {
            this.closeModal();
          }
        })
      }
    }
  }

  public addTask(template: TemplateRef<any>): void {
      // let fnameTeacher: string = this.choose_teacher.split(" ")[0];
      // let lnameTeacher: string = this.choose_teacher.split(" ")[1];
      //
      // this.task.teacher = this.teachers.find(teacher =>
      //   teacher.fname.toLowerCase() === fnameTeacher.toLowerCase()
      //   && teacher.lname.toLowerCase() === lnameTeacher.toLowerCase());

      this.task.day = this.days.indexOf(this.choose_day);
      this.task.time = this.times.indexOf(this.choose_time);
      this.taskService.addTask(this.task).subscribe(task => {
        let taskfromserver: Task = task as Task;
        if (taskfromserver.id == null) {
          this.show_alert = true;
          this.task = new Task();
          this.alertModal(template);
        } else {
          if (this.choose_teacher) {
            this.getTaskByTeacher(taskfromserver.teacher.idteacher);
          } else {
            this.getTaskByGroup(taskfromserver.group.id);
          }
          this.task = new Task();
        }
      });
    this.closeModal();
  }


  public getTaskByGroup(idgroup: number): void {
    this.taskService.getTaskByGroupId(idgroup).subscribe(tasks => {
      this.timetable = tasks as Task[];
      this.choose_display_group = true;
    })
  }

  public getTaskByTeacher(idteacher: number): void {
    this.taskService.getTaskByTeacherId(idteacher).subscribe(tasks => {
      this.timetable = tasks as Task[];
      this.choose_display_teacher = true;
    })
  }

  public deleteTaskById(idtask: number, id: number): void {
    this.taskService.deleteTaskById(idtask).subscribe(() => {
      this.getTaskByGroup(id);
    })
  }

  public deleteTaskById1(idtask: number, id: number): void {
    this.taskService.deleteTaskById(idtask).subscribe(() => {
      this.getTaskByTeacher(id);
    })
  }

}



