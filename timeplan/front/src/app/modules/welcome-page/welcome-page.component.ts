import {Component, HostBinding} from "@angular/core";

@Component({
  selector:"welcome-page",
  templateUrl:"./welcome-page.component.html",
  styleUrls:["./welcome-page.component.css"],
})

export class WelcomePageComponent {
  //HostBinding
  @HostBinding('class.welcome-page') private readonly hostClass = true;
}
