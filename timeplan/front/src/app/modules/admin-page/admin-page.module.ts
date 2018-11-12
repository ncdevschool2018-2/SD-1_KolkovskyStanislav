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
import {StudentService} from "../../services/student.service";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "../../services/users.service";
import {SubjectsComponent} from "./subjects/subjects.component";
import {SubjectService} from "../../services/subject.service";
import {DataService} from "../../services/data.service";




@NgModule({
  declarations:[
    AdminPageComponent,
    GroupsComponent,
    UsersComponent,
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
            DataService,
            SubjectService]
})


export class AdminPageModule{

}
