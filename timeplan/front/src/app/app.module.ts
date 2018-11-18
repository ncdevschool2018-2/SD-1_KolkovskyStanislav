import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import {WelcomePageModule} from "./modules/welcome-page/welcome-page.module";
import {WelcomePageComponent} from "./modules/welcome-page/welcome-page.component";
import {AdminPageComponent} from "./modules/admin-page/admin-page.component";
import {AdminPageModule} from "./modules/admin-page/admin-page.module";
import {StudentPageModule} from "./modules/student-page/student-page.module";
import {TeacherPageModule} from "./modules/teacher-page/teacher-page.module";
import {StudentPageComponent} from "./modules/student-page/student-page.component";
import {TeacherPageComponent} from "./modules/teacher-page/teacher-page.component";
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WelcomePageModule,
    AdminPageModule,
    StudentPageModule,
    TeacherPageModule,
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
