export class Student{

  choosen:boolean = false;
  // private adding_in_group:boolean = true;
  // private removing_from_group:boolean = false;

  idstudents:number;
  fname: string;
  lname:string;
  email:string;
  password: string;
  ng:string= null;

  constructor(){}


  static cloneStudent(student: Student):Student{
    let copyStudent = new Student();
    copyStudent.idstudents = student.idstudents;
    copyStudent.fname = student.fname;
    copyStudent.lname =  student.lname;
    copyStudent.email =   student.email;
    copyStudent.password =  student.password;
    copyStudent.ng = student.ng;
    return copyStudent;
  }
}
