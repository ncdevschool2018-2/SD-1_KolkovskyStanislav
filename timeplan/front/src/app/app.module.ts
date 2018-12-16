import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {GroupService} from "./services/group.service";
import {StudentService} from "./services/student.service";
import {TeacherService} from "./services/teacher.service";
import {TaskService} from "./services/task.service";
import {SubjectService} from "./services/subject.service";
import {LoginComponent} from "./login/login.component";
import {GroupsComponent} from "./groups/groups.component";
import {SubjectsComponent} from "./subjects/subjects.component";
import {TimetableComponent} from "./schedule/timetable.component";
import {MainComponent} from "./main/main.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {StudentPageComponent} from "./student-page/student-page.component";
import {TeacherPageComponent} from "./teacher-page/teacher-page.component";
import {RouterModule} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AlertModule, ButtonsModule, ModalModule, TabsModule} from "ngx-bootstrap";
import {Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {HttpClientModule} from "@angular/common/http";
import { httpInterceptorProviders } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupsComponent,
    SubjectsComponent,
    TimetableComponent,
    MainComponent,
    AdminPageComponent,
    GroupsComponent,
    TeacherPageComponent,
    StudentPageComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: '', redirectTo : 'login', pathMatch: 'full'},
        {path :'users',component: UsersComponent},
        {path :'groups',component: GroupsComponent},
        {path :'subjects',component: SubjectsComponent},
        {path :'home', component: MainComponent},
        {path :'timetable', component: TimetableComponent},
        {path :'login',component: LoginComponent },
        {path :'teacher',component:TeacherPageComponent },
        {path :'student',component:StudentPageComponent }
      ]),
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    Ng4LoadingSpinnerModule,
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [GroupService,
  StudentService,
  TeacherService,
  TaskService,
  SubjectService,
  Ng4LoadingSpinnerService,
  httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
