import {Component, HostBinding} from '@angular/core';
import {Router} from "@angular/router";
import {NgModule} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @HostBinding('class.app') private readonly hostClass = true;


}
