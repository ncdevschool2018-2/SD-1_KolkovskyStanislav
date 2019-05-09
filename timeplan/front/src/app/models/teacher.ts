import {Subject} from "./subject";

export class Teacher{
  idteacher:number;
  fname:string;
  lname:string;
  email:string;
  password:string;
  level:string;
  subjects: Subject[]=[];

  constructor(){}


  static cloneStudent(teacher: Teacher):Teacher{
    let copyTeacher = new Teacher();
   copyTeacher.idteacher = teacher.idteacher;
   copyTeacher.fname = teacher.fname;
   copyTeacher.lname = teacher.lname;
   copyTeacher.level = teacher.level;
   copyTeacher.email = teacher.email;
   copyTeacher.password =teacher.password;
   copyTeacher.subjects = teacher.subjects;
   return copyTeacher;
  }

  getInfo():string{
    return this.fname + " " + this.lname
  }
}

