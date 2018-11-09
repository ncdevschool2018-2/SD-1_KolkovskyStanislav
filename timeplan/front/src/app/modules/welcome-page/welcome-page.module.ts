import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WelcomePageComponent} from "./welcome-page.component";
import {RouterModule, Routes} from "@angular/router";
import {AdminPageComponent} from "../admin-page/admin-page.component";
import {StudentPageComponent} from "../student-page/student-page.component";
import {TeacherPageComponent} from "../teacher-page/teacher-page.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  imports: [CommonModule,
    FormsModule],
  exports:[WelcomePageComponent],
  declarations:[WelcomePageComponent]
})

export  class  WelcomePageModule {

}
