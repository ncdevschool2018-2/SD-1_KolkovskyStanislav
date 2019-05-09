import {Component, TemplateRef, OnInit} from "@angular/core";
import {Group} from "../models/group";
import {Student} from "../models/student";
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {GroupService} from "../services/group.service";
import {StudentService} from "src/app/services/student.service";
import {TeacherService} from "src/app/services/teacher.service";
import {SubjectService} from "../services/subject.service";
import {Subject} from "../models/subject";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent implements OnInit {

  public formGroup: FormGroup;
  count_choose_student: number = 0;
  count_choose_subject: number = 0;
  modalRef: BsModalRef;
  selectedGroup: string = null;

  group: Group = new Group();
  subject_in_group: Subject[] = [];
  student_in_group: Student[] = [];
  student_not_group: Student[] = [];
  subject_not_group: Subject[] = [];
  student_list: Student[] = [];
  group_list: Group[] = [];

  idgroup: number;

  choosen_name_group: string;
  choose_id_group: number;

  constructor(private modalService: BsModalService,
              private studentService: StudentService,
              private groupService: GroupService,
              private teacherService: TeacherService,
              private subjectService: SubjectService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ["", Validators.compose([Validators.minLength(1), Validators.required])]
    });

    this.studentService.getAllStudents().subscribe(students => {
      this.student_list = students as Student[];
    });

    this.studentService.getAllStudentsNotGroup().subscribe(students => {
      this.student_not_group = students as Student[];
    });

    this.groupService.getAllGroups().subscribe(groups => {
      this.group_list = groups as Group[];
    });
  }


  public openModalCreate(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }


  public openStudentModal(template: TemplateRef<any>, idgroup: number, group_name: string): void {
    this.modalRef = this.modalService.show(template);
    this.choosen_name_group = group_name;
    if (idgroup != null) {
      this.showStudentByGroupID(idgroup);
    }
  }

  public openAddingStudentModal(template: TemplateRef<any>, idgroup: number, name: string) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    this.choosen_name_group = name;
    this.choose_id_group = idgroup;
    this.studentService.getAllStudentsNotGroup().subscribe(students => {
      this.student_not_group = students as Student[];
      console.log("Baby!)")
    })
  }

  public openSubjectModal(template: TemplateRef<any>, idgroup: number, name: string): void {
    this.modalRef = this.modalService.show(template);
    this.choosen_name_group = name;
    if (idgroup != null) {
      this.idgroup = idgroup;
      this.showSubjectByGroupId(idgroup);
    }
  }

  public openAddingSubjectModal(template: TemplateRef<any>, idgroup: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    this.choose_id_group = idgroup;
    this.subjectService.getSubjectsNotAttachedByGroup(idgroup).subscribe(subjects => {
      this.subject_not_group = subjects as Subject[];
      console.log("Hek");
    })
  }

  public closeModal(): void {
    this.modalRef.hide();
  }


  //Buisness logic of creating group of STUDENTS
  public addStudent(student: Student): void {
    let indexStudent = this.student_not_group.indexOf(student);
    this.student_not_group[indexStudent].choosen = true;
    this.count_choose_student++;
  }

  public removeStudent(student: Student): void {
    this.count_choose_student--;
    let indexStudent = this.student_not_group.indexOf(student);
    this.student_not_group[indexStudent].choosen = false;
  }

  public create_group(): void {
    if (this.selectedGroup == null) {
      alert("Введите имя группы");
      return;
    }

    let students: Student[] = [];
    for (let i = 0; i < this.student_not_group.length; i++) {
      if (this.student_not_group[i].choosen == true) {
        students.push(this.student_not_group[i]);
      }
    }
    this.group.name = this.selectedGroup;
    this.groupService.createGroup(this.selectedGroup, students).subscribe(group => {
      this.group = group as Group;
      console.log(this.group);
      this.ngOnInit();
    })
    this.modalRef.hide();
    // this.groupService.getAllGroups().subscribe(groups =>{
    //   this.group_list = groups as Group[];
    // })

  }

  public addStudentsInGroup() {
    let students: Student[] = [];
    for (let i = 0; i < this.student_not_group.length; i++) {
      if (this.student_not_group[i].choosen == true) {
        students.push(this.student_not_group[i]);
      }
    }
    if (students.length == 0) {
      console.log("choose subject");
      return;
    } else {
      this.studentService.addStudentsGroup(this.choose_id_group, students).subscribe(() => {
        console.log("Good adding!");
      })
      this.modalRef.hide();
    }

  }

  public addSubjectsInGroup(subject: Subject) {
    console.log(subject);
    let indexSubject = this.subject_not_group.indexOf(subject);
    this.subject_not_group[indexSubject].choosen = true;
    this.count_choose_subject++;
  }

  public removeSubjectsInGroup(subject: Subject) {
    this.count_choose_subject--;
    let indexSubject = this.subject_not_group.indexOf(subject);
    this.subject_not_group[indexSubject].choosen = false;
  }

  public attachedSubjectByGroup(): void {
    let subjects: Subject[] = [];
    for (let i = 0; i < this.subject_not_group.length; i++) {
      if (this.subject_not_group[i].choosen == true) {
        subjects.push(this.subject_not_group[i]);
      }
    }
    this.groupService.addSubject(this.choose_id_group, subjects).subscribe(group => {
      console.log("good!");
    })
    this.groupService.getAllGroups().subscribe(groups => {
      this.group_list = groups as Group[];
    })

    this.modalRef.hide();
  }


  public showSubjectsNotAttachedByGroup(idgroup): void {

  }

  //************************************************//
  public showStudentByGroupID(idgroup: number): void {
    this.studentService.getStudentsByGroupId(idgroup).subscribe(students => {
      this.student_in_group = students as Student[];
    })
  }

  public showSubjectByGroupId(idgroup: number): void {
    this.subjectService.getSubjectsByGroupId(idgroup).subscribe(subjects => {
      this.subject_in_group = subjects as Subject[];
    })
  }

  public removeStudentFromGroup(id: number): void {
    this.studentService.removeStudent(id).subscribe(student => {
      console.log(student);
    });
    this.studentService.getAllStudentsNotGroup().subscribe(students => {
      this.student_not_group = students as Student[];
    })

    this.closeModal();
  }

  public removeSubjectFromGroup(id: number): void {
    this.groupService.removeSubjectFromGroup(this.idgroup, id).subscribe(() => {
      console.log("Good jod!");
    })
  }

  public deleteGroup(id: number): void {
    let answeer = confirm("Удаляя группу, удалятся все студенты находящиейся в ней. Удалить группу?")
    if (answeer == true) {
      this.groupService.deleteById(id).subscribe(() => {
        console.log("Succsess delete!")
        this.ngOnInit();
      })
    }
  }

}
