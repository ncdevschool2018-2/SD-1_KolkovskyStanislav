import {Component} from "@angular/core";
import {Subject} from "../models/subject";

@Component({
  selector: 'create-subject',
  templateUrl:'./create-subject.component.html',
  styleUrls:['./create-subject.component.css']
})

export class CreateSubjectComponent{

  //Get list subject from backend
  list_subjects: Subject[] = [new Subject("eNGLISH")];

  //new Subject
  newSubject:Subject;

  inputString:string

  createSubject(){
    this.list_subjects.push(this.newSubject = new Subject(this.inputString));
    console.log(this.newSubject);
  }

  //future ficha
  deleteSubject(){}
}
