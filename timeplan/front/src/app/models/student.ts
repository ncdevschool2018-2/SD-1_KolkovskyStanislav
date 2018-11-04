export class Student{

  choosen:boolean = false;
  adding_in_group:boolean = true;
  removing_from_group:boolean = false;

   idstudents:number;
   fname: string;
   lname:string;
   email:string;
   password: string;
   ng:string= null;

  constructor(){}



  setStatus(status:boolean){
    this.choosen = status;
  }

  getStatus(){
    return this.choosen;
  }


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
