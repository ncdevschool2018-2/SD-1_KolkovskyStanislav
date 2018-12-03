import {Component, HostBinding} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../services/login.service";
// import 'rxjs/add/operator/finally';


@Component({
  selector:"welcome-page",
  templateUrl:"./welcome-page.component.html",
  styleUrls:["./welcome-page.component.css"],
})

export class WelcomePageComponent {
  //HostBinding
  //@HostBinding('class.welcome-page') private readonly hostClass = true;


  constructor(private app: LoginService, private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }

  logout() {
    this.http.post('logout', {}).subscribe( () => {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
    });
  }


}
