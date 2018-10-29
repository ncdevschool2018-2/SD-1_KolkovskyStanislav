import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WelcomePageModule} from "./modules/welcome-page/welcome-page.module";
import {WelcomePageComponent} from "./modules/welcome-page/welcome-page.component";
import {AdminPageComponent} from "./modules/admin-page/admin-page.component";
import {AdminPageModule} from "./modules/admin-page/admin-page.module";
import { AppRoutingModule } from './app-routing.module';
import {StudentPageModule} from "./modules/student-page/student-page.module";
import {TeacherPageModule} from "./modules/teacher-page/teacher-page.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,WelcomePageModule,AdminPageModule, AppRoutingModule, StudentPageModule,
    TeacherPageModule
  ],
  exports:[AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
