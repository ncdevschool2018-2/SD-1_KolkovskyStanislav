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
import {UsersService} from "../../services/users.service";
import {SubjectsComponent} from "./subjects/subjects.component";
import {SubjectService} from "../../services/subject.service";
import {MainComponent} from "./main/main.component";
import {RouterModule} from "@angular/router";




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
            {path :'subjects',component: SubjectsComponent}
            ]),
          HttpClientModule],
  exports:[AdminPageComponent],
  providers:[UsersService,
            SubjectService]
})

export class AdminPageModule{

}
