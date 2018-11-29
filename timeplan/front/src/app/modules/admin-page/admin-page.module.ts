import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminPageComponent} from "./admin-page.component";
import {GroupsComponent} from "./groups/groups.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UsersComponent} from "./users/users.component";
import {AlertModule} from "ngx-bootstrap/alert";
import {TabsModule } from 'ngx-bootstrap/tabs';
import {ButtonsModule} from 'ngx-bootstrap';
import {ModalModule} from "ngx-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {SubjectsComponent} from "./subjects/subjects.component";
import {SubjectService} from "../../services/subject.service";
import {MainComponent} from "./main/main.component";
import {RouterModule} from "@angular/router";
import {StudentService} from "src/app/services/student.service";
import {TeacherService} from "src/app/services/teacher.service";
import {GroupService} from "src/app/services/group.service";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';


@NgModule({
  declarations:[
    AdminPageComponent,
    GroupsComponent,
    UsersComponent,
    SubjectsComponent,
    MainComponent],
  imports:[CommonModule,
          FormsModule,
          BrowserModule,
          AlertModule.forRoot(),
          TabsModule.forRoot(),
          ButtonsModule.forRoot(),
          ModalModule.forRoot(),
          RouterModule.forRoot([
            {path :'users',component: UsersComponent},
            {path :'groups',component: GroupsComponent},
            {path :'subjects',component: SubjectsComponent},
            {path : 'home', component: MainComponent}
          ]),
          HttpClientModule,
          NgMultiSelectDropDownModule.forRoot(),
    MultiselectDropdownModule],
  exports:[AdminPageComponent],
  providers:[TeacherService,
            SubjectService,
            StudentService,
            GroupService]
})

export class AdminPageModule{

}
