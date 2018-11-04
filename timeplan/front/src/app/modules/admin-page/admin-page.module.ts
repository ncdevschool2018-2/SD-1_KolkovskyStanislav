import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AdminPageComponent} from "./admin-page.component";
import {CreateSubjectComponent} from "./main/create.subject/create-subject.component";
import {CreateGroupComponent} from "./main/create.group/create-group.component";
import {GroupsComponent} from "./groups/groups.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UsersComponent} from "./users/users.component";
import {AlertModule} from "ngx-bootstrap/alert";
import {TableTeacherComponent} from "./main/create.timetable/table_teacher/table-teacher.component";
import {TableStudentComponent} from "./main/create.timetable/table_student/table-student.component";
import { TabsModule } from 'ngx-bootstrap/tabs';
import {ButtonsModule} from 'ngx-bootstrap';
import {ModalModule} from "ngx-bootstrap";
import {StudentService} from "../../services/student.service";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "../../services/users.service";
import {SubjectsComponent} from "./subjects/subjects.component";
import {SubjectService} from "../../services/subject.service";




@NgModule({
  declarations:[
    AdminPageComponent,
    CreateSubjectComponent,
    CreateGroupComponent,
    GroupsComponent,
    UsersComponent,
    TableTeacherComponent,
    TableStudentComponent,
    SubjectsComponent],
  imports:[CommonModule,
          FormsModule,
          BrowserModule,
          AlertModule.forRoot(),
          TabsModule.forRoot(),
          ButtonsModule.forRoot(),
          ModalModule.forRoot(),
          HttpClientModule],
  exports:[AdminPageComponent],
  providers:[StudentService,
            UsersService,
  SubjectService]
})


export class AdminPageModule{

}
