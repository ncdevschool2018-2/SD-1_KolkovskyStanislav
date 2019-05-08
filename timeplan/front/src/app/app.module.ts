import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  AccordionModule,
  AlertModule,
  ButtonsModule,
  CollapseModule,
  ModalModule,
  TabsModule,
  TooltipModule
} from "ngx-bootstrap";
import {Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {StudentTimeComponent} from './student-time/student-time.component';
import {TeacherTimeComponent} from './teacher-time/teacher-time.component';
import {TeacherProfileComponent} from './teacher-profile/teacher-profile.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';
import {NgToolkitError} from "@angular/cli/models/error";




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
    UsersComponent,
    StudentTimeComponent,
    TeacherTimeComponent,
    TeacherProfileComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: '', redirectTo: 'login', pathMatch: 'full'},
        // {path :'home', component: MainComponent},
        {path: 'login', component: LoginComponent},
        {
          path: 'teacher', component: TeacherPageComponent, children: [
            {path: 'teacher-time', component: TeacherPageComponent, outlet: 'teacher'},
            {path: 'teacher-profile', component: TeacherProfileComponent, outlet: 'teacher'}
          ]
        },
        {
          path: 'student', component: StudentPageComponent, children: [
            {path: 'student-time', component: StudentTimeComponent, outlet: 'student'},
            {path: 'student-profile', component: StudentProfileComponent, outlet: 'student'}
          ]
        },
        {
          path: 'admin', component: AdminPageComponent, children: [
            {path: 'users', component: UsersComponent, outlet: 'admin'},
            {path: 'groups', component: GroupsComponent, outlet: 'admin'},
            {path: 'subjects', component: SubjectsComponent, outlet: 'admin'},
            {path: 'timetable', component: TimetableComponent, outlet: 'admin'}
          ]
        }
      ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    Ng4LoadingSpinnerModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [GroupService,
    StudentService,
    TeacherService,
    TaskService,
    SubjectService,
    Ng4LoadingSpinnerService,
    httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
