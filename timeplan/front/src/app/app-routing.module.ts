import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {AdminPageComponent} from "./modules/admin-page/admin-page.component";
import {StudentPageComponent} from "./modules/student-page/student-page.component";
import {TeacherPageComponent} from "./modules/teacher-page/teacher-page.component";


const routes: Routes = [
  {path : '' , component : AdminPageComponent},
  {path : '' , component : StudentPageComponent},
  {path : '' , component : TeacherPageComponent}
  ]



@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
