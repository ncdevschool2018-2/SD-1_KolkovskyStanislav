import {NgModule} from "@angular/core";
import {StudentPageComponent} from "./student-page.component";
import {TimetableComponent} from "./timetable/timetable.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {ProfileComponent} from "./profile/profile.component";


@NgModule({
  declarations:[
    StudentPageComponent,
    TimetableComponent,
    TeachersComponent,
    ProfileComponent
  ],
  imports:[],
  providers:[],
  bootstrap:[]
})

export class StudentPageModule {

}
