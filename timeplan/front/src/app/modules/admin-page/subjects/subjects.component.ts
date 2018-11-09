import {Component, OnInit, TemplateRef} from "@angular/core";
import {Subject} from "../../../models/subject";
import {SubjectService} from "../../../services/subject.service";
import {UsersService} from "../../../services/users.service";
import {Teacher} from "../../../models/teacher";
import {Form} from "@angular/forms";
import {Alert} from "selenium-webdriver";

@Component({
  selector:'subjects',
  templateUrl:"./subject.component.html",
  styleUrls:["./subject.component.css"]
})

export class SubjectsComponent implements OnInit{


  teachers:Teacher[];
  subjects: Subject[] = [];
  inputString:string;
  show_alert:boolean = false;


  ngOnInit(){
    this.subjectService.getSubjects().subscribe(subjects =>{
      this.subjects = subjects as Subject[];
    })

    this.teacherService.getAllTeachers().subscribe(teachers =>{
      this.teachers = teachers as Teacher [];
    })
  }

  constructor(private subjectService: SubjectService,
              private teacherService: UsersService){}

  createSubject(){
    let newSubject: Subject = new Subject();
    newSubject.idsubject = this.calculateIdSubject();
    if(this.findDuplicates(this.inputString)){
      this.show_alert = true;
    }else{
      this.show_alert = false
      newSubject.name = this.inputString;
      console.log(newSubject);
      this.subjectService.createSubject(newSubject).subscribe(()=>{
        this.updateListSubjects();
      })
    }

  }

  closeAlert():void{
    this.show_alert = false
  }

  public calculateIdSubject():number{
    if(this.subjects.length != 0){
      return this.subjects[this.subjects.length-1].idsubject +1;
    }else{
      return 1;
    }
  }

  private findDuplicates(name:string):boolean{
    for(let i = 0; i < this.subjects.length; i++){
      if(this.subjects[i].name == name)
        return true;
    }
    return false;
  }

  public deleteSubject(idsubject:number):void{
    this.subjectService.deleteSubject(idsubject).subscribe(()=>{
      this.updateListSubjects();
    })
  }

  private updateListSubjects(){
    this.subjectService.getSubjects().subscribe(subjects =>{
      this.subjects = subjects as Subject[];
    });
  }
}
