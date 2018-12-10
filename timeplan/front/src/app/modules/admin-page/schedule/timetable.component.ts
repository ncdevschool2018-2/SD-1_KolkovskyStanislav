import {Component, OnInit, TemplateRef} from "@angular/core";
import {LoginService} from "../../../services/login.service";
import {TaskService} from "../../../services/task.service";
import {StudentService} from "../../../services/student.service";
import {TeacherService} from "../../../services/teacher.service";
import {GroupService} from "../../../services/group.service";
import {Group} from "../../../models/group";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Student} from "../../../models/student";
import {Subject} from "../../../models/subject";
import {SubjectService} from "../../../services/subject.service";
import {Teacher} from "../../../models/teacher";
import {Task} from "../../../models/task";

@Component({
    selector:"timetable",
    templateUrl:'./timetable.component.html',
    styleUrls:['./timetable.component.css']
})

export class TimetableComponent implements OnInit {

  public modalRef:BsModalRef;
  public groups:Group[];
  public students:Student[];
  public subjects:Subject[];
  public teachers:Teacher[] = [];
  public list_teacher:Teacher[] = [];
  public timetable:Task[];

  public task:Task = new Task() ;
  public edittask:Task = new Task();

  public choose_group:string;
  public choose_subject:string;
  public choose_day:string;
  public choose_time:string;
  public choose_teacher:string;

  public days:string[] =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  public times:string[] =["9:00-10:20", "10:30-11:50", "12:00-13:20", "13:50-15:10", "15:20-16:40", "16:50-18:10"];


  public choose_display_group:boolean = false;
  public choose_display_teacher:boolean = false;
  public display_show:boolean = false;
  public display_show1:boolean = false;


  public show_alert:boolean = false;
  constructor(private taskService: TaskService,
              private studentService: StudentService,
              private teacherService: TeacherService,
              private groupService: GroupService,
              private modalService:BsModalService,
              private subjectService:SubjectService) {
  }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe( groups => {
      this.groups = groups as Group[];
      console.log("You get group Baby!");
    })

    this.teacherService.getAllTeachers().subscribe( teachers => {
      this.list_teacher = teachers as Teacher[];
      console.log("You get group Baby - 2!");
    })
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  openEditModal(template: TemplateRef<any>, task:Task){

    this.edittask = task;
    this.choose_group = task.group.name;

    this.choose_day = this.days[task.day];
    this.choose_time = this.times[task.time];

    this.getListSubject();
    this.teacherService.getTeacherByIdSubject(task.subject.idsubjects).subscribe( teachers =>{
      this.teachers = teachers as Teacher[];
      console.log("Yes Subject!");
    })

    this.choose_teacher = task.teacher.fname + " " + task.teacher.lname;
    this.modalRef = this.modalService.show(template);
  }

  closeModal(){
    this.modalRef.hide();
  }

  public showGroup():void{
    this.display_show = true;
    this.display_show1 = false;
    this.choose_display_teacher = false;
    this.choose_display_group = false;
  }

  public showTeacher():void{
    this.display_show1 = true;
    this.display_show = false;
    this.choose_display_teacher = false;
    this.choose_display_group = false;
  }


  public alertModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }


  // public checkSubjctInGroup(template: TemplateRef<any>){
  //
  //   this.getListSubject(template);
  //
  // }

  public getListGroup():void{

  }

  public getListSubject():void{
    for(let i = 0; i < this.groups.length; i++){
      if(this.groups[i].name == this.choose_group){
        this.task.group = this.groups[i];
        this.subjectService.getSubjectsByGroupId(this.groups[i].id).subscribe(subject =>{
          this.subjects = subject as Subject[];
          console.log("Yes")

        });
      }
    }
  }

  public getListTeacher():void{
    for(let i = 0; i < this.subjects.length; i++){
      if(this.subjects[i].name == this.choose_subject){
        this.task.subject = this.subjects[i];
        this.teacherService.getTeacherByIdSubject(this.subjects[i].idsubjects).subscribe( teachers =>{
          this.teachers = teachers as Teacher[];
          console.log("Yes Subject!");
        })
        break;
      }
    }
  }

  public addTask(template: TemplateRef<any>):void{
    console.log(this.choose_teacher.split(" ")[0] + "  " +this.choose_teacher.split(" ")[1]);
    for(let i = 0; i < this.teachers.length; i++){
      if(this.teachers[i].fname == this.choose_teacher.split(" ")[0]
          && this.teachers[i].lname == this.choose_teacher.split(" ")[1]){
          this.task.teacher = this.teachers[i];
          break;
      }
    }
    this.task.day = this.days.indexOf(this.choose_day);
    this.task.time = this.times.indexOf(this.choose_time);
    this.taskService.addTask(this.task).subscribe(task =>{
      console.log("Task added!)");
      let taskfromserver:Task = task as Task;
      if(taskfromserver.id == null){
        console.log("You can't add task")
        this.show_alert = true;
        this.task = new Task();
        this.alertModal(template);
      }else{
        console.log("Task added!)");
      }
    });
    this.closeModal();
  }


  public getTaskByGroup(idgroup:number):void{
    this.taskService.getTaskByGroupId(idgroup).subscribe(tasks => {
      this.timetable = tasks as Task[];
      console.log("Timetable loaded!");
      this.choose_display_group = true;
    })
  }

  public getTaskByTeacher(idteacher:number):void{
    this.taskService.getTaskByTeacherId(idteacher).subscribe( tasks => {
      this.timetable = tasks as Task[];
      console.log("Timetable loaded!");
      this.choose_display_teacher = true;
    })
  }


  public deleteTaskById(idtask:number):void{
    this.taskService.deleteTaskById(idtask).subscribe(()=>{
      console.log("Delete succsess!");
    })
  }

}



