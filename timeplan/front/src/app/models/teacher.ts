import {Subject} from "./subject";

export class Teacher{
  id:number;
  fname:string;
  lname:string;
  email:string;
  password:string;
  level:string;
  subject:string;

  constructor(){}


  static cloneStudent(teacher: Teacher):Teacher{
    let copyTeacher = new Teacher();

   copyTeacher.id = teacher.id;
   copyTeacher.fname = teacher.fname;
   copyTeacher.lname = teacher.lname;
   copyTeacher.level = teacher.level;
   copyTeacher.email = teacher.email;
   copyTeacher.password =teacher.password;
   copyTeacher.subject = teacher.subject;
   return copyTeacher;
  }

}

