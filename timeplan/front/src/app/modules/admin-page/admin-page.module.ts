import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CreateStudentComponent} from "./main/create.student/create-student.component";
import {AdminPageComponent} from "./admin-page.component";
import {MainComponent} from "./main/main.component";
import {CreateTimetableComponent} from "./main/create.timetable/create-timetable.component";
import {CreateTeacherComponent} from "./main/create.teacher/create-teacher.component";
import {CreateSubjectComponent} from "./main/create.subject/create-subject.component";
import {CreateGroupComponent} from "./main/create.group/create-group.component";
import {GroupsComponent} from "./groups/groups.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UsersComponent} from "./users/users.component";
import {TimetableGroupComponent} from "./timetable-group/timetable-group.component";
import {TeachersComponent} from "./teachers/teachers.component";

@NgModule({
  declarations:[
    CreateStudentComponent,
    AdminPageComponent,
    MainComponent,
    CreateStudentComponent,
    CreateTimetableComponent,
    CreateTeacherComponent,
    CreateSubjectComponent,
    CreateGroupComponent,
    GroupsComponent,
    UsersComponent,
    TimetableGroupComponent,
    TeachersComponent],
  imports:[CommonModule,
          FormsModule,
          BrowserModule],
  exports:[AdminPageComponent]
})


export class AdminPageModule{

}
