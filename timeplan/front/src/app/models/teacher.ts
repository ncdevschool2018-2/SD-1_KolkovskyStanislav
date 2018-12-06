import {Subject} from "./subject";

export class Teacher{
  idteachers:number;
  fname:string;
  lname:string;
  email:string;
  password:string;
  level:string;
  subjects: Subject[]=[];

  constructor(){}


  static cloneStudent(teacher: Teacher):Teacher{
    let copyTeacher = new Teacher();
   copyTeacher.idteachers = teacher.idteachers;
   copyTeacher.fname = teacher.fname;
   copyTeacher.lname = teacher.lname;
   copyTeacher.level = teacher.level;
   copyTeacher.email = teacher.email;
   copyTeacher.password =teacher.password;
   copyTeacher.subjects = teacher.subjects;
   return copyTeacher;
  }

}

