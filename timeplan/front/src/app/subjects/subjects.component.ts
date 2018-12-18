import {Component, OnInit, TemplateRef, Input} from "@angular/core";
import {Teacher} from "../models/teacher";
import {Subject} from "../models/subject";
import {SubjectService} from "../services/subject.service";
import {TeacherService} from "../services/teacher.service";



@Component({
  selector:'subjects',
  templateUrl:"./subject.component.html",
  styleUrls:["./subject.component.css"]
})

export class SubjectsComponent implements OnInit{

  teachers:Teacher[];
  subjects: Subject[] = [];
  inputString:string;
  show_alert_add:boolean = false;
  show_alert_del:boolean = false;


  ngOnInit(){

    // this.dataService.currentTeacher.subscribe(teacher => this.teachers = teacher);

    this.subjectService.getSubjects().subscribe(subjects =>{
      this.subjects = subjects as Subject[];
    })

    console.log(this.subjects);

    this.teacherService.getAllTeachers().subscribe(teachers =>{
      this.teachers = teachers as Teacher [];
    })
  }

  constructor(private subjectService:
                SubjectService,
              private teacherService: TeacherService){}

  public createSubject():void{
    let newSubject: Subject = new Subject();
    if(this.findDuplicates(this.inputString)){
      this.show_alert_add = true;
    }else{
      this.show_alert_add = false
      newSubject.name = this.inputString;
      console.log(newSubject);
      this.subjectService.createSubject(newSubject).subscribe(()=>{
        this.updateListSubjects();
      })
    }
  }

  closeAlert():void{
    this.show_alert_add = false;
    this.show_alert_del = false;
  }


  private findDuplicates(name:string):boolean{
    for(let i = 0; i < this.subjects.length; i++){
      if(this.subjects[i].name == name)
        return true;
    }
    return false;
  }

  public deleteSubject(idsubject:number):void{
    if(this.validateDelete(idsubject)){
     alert("Предмет нельзя удалить! Есть преподаватель с таким предметом!");
    }else{
      this.show_alert_del = false;
      this.subjectService.deleteSubject(idsubject).subscribe(()=>{
        this.updateListSubjects();
      })
    }

    // this.subjectService.deleteSubject(idsubject).subscribe(()=>{
    //   this.updateListSubjects();
    // })


  }

  private validateDelete(idsubjects:number):boolean{
    for(let i = 0 ; i < this.teachers.length; i++){
      for(let j=0; j < this.teachers[i].subjects.length; j++){
        if(this.teachers[i].subjects[j].idsubjects==idsubjects){
          return true;
        }
      }
    }
    return false;
  }

  private updateListSubjects(){
    this.subjectService.getSubjects().subscribe(subjects =>{
      this.subjects = subjects as Subject[];
    });
  }

  public updateComponent():void{
    this.teacherService.getAllTeachers().subscribe(teachers =>{
      this.teachers = teachers as Teacher [];
    })
  }
}
