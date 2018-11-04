import {Component, OnInit} from "@angular/core";
import {Subject} from "../../../models/subject";
import {SubjectService} from "../../../services/subject.service";

@Component({
  selector:'subjects',
  templateUrl:"./subject.component.html",
  styleUrls:["./subject.component.css"]
})

export class SubjectsComponent implements OnInit{

  subjects: Subject[] = [];
  newSubject:Subject;
  inputString:string;


  ngOnInit(){
    this.subjectService.getSubject().subscribe(subjects =>{
      this.subjects = subjects as Subject[];
    })
  }

  constructor(public subjectService: SubjectService){}

  createSubject(){

    this.newSubject = new Subject();
    this.newSubject._name = this.inputString;

    this.subjectService.createSubject(this.newSubject).subscribe(subject =>{
      this.subjects.push(subject);
      this.updateListSubjects();
    })
  }



  private updateListSubjects(){
    this.subjectService.getSubject().subscribe(subjects =>{
      this.subjects = subjects as Subject[];
    });
  }

}
