import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WelcomePageModule} from "./modules/welcome-page/welcome-page.module";
import {WelcomePageComponent} from "./modules/welcome-page/welcome-page.component";
import {AdminPageComponent} from "./modules/admin-page/admin-page.component";
import {AdminPageModule} from "./modules/admin-page/admin-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,WelcomePageModule,AdminPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
