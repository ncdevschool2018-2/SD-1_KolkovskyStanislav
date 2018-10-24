import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CreateStudentComponent} from "./main/create.student/create-student.component";
import {AdminPageComponent} from "./admin-page.component";
import {MainComponent} from "./main/main.component";

import {CreateTeacherComponent} from "./main/create.teacher/create-teacher.component";
import {CreateSubjectComponent} from "./main/create.subject/create-subject.component";
import {CreateGroupComponent} from "./main/create.group/create-group.component";
import {GroupsComponent} from "./groups/groups.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UsersComponent} from "./users/users.component";
import {TimetableGroupComponent} from "./timetable-group/timetable-group.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {AlertModule} from "ngx-bootstrap/alert";
import {TableTeacherComponent} from "./main/create.timetable/table_teacher/table-teacher.component";
import {TableStudentComponent} from "./main/create.timetable/table_student/table-student.component";


@NgModule({
  declarations:[
    CreateStudentComponent,
    AdminPageComponent,
    MainComponent,
    CreateStudentComponent,
    CreateTeacherComponent,
    CreateSubjectComponent,
    CreateGroupComponent,
    GroupsComponent,
    UsersComponent,
    TimetableGroupComponent,
    TeachersComponent,
    TableTeacherComponent,
    TableStudentComponent],
  imports:[CommonModule,
          FormsModule,
          BrowserModule,
          AlertModule.forRoot()],
  exports:[AdminPageComponent]
})


export class AdminPageModule{

}
