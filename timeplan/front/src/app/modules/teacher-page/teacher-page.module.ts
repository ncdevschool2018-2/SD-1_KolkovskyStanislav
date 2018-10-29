import {NgModule} from "@angular/core";
import {TeacherPageComponent} from "./teacher-page.component";
import {TimetableComponent} from "./timetable/timetable.component";
import {ProfileComponent} from "./profile/profile.component";
import {GroupsComponent} from "./groups/groups.component";


@NgModule({
  declarations:[TeacherPageComponent,
  TimetableComponent,
  ProfileComponent,
  GroupsComponent],
  imports:[],
  bootstrap:[],
  providers:[]
})

export class TeacherPageModule{

}
