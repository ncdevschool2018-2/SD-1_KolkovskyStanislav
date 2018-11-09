import {Component, HostBinding} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector:"welcome-page",
  templateUrl:"./welcome-page.component.html",
  styleUrls:["./welcome-page.component.css"],
})

export class WelcomePageComponent {
  //HostBinding
  //@HostBinding('class.welcome-page') private readonly hostClass = true;


  constructor(private router:Router){}

  login_email:string;
  login_password:string;

  login(){
    if(this.login_email == 'admin' && this.login_password == 'admin'){
      this.router.navigate(['admin-page']);
    }

  }

}
