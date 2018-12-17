import {Component, HostBinding} from '@angular/core';
import {Router} from "@angular/router";
import {NgModule} from "@angular/core";
import {TokenStorageService} from "./auth/token-storage.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 // @HostBinding('class.app') private readonly hostClass = true;


  //private roles: string[];
  private authority: string;
  private role:string;
  constructor(private tokenStorage: TokenStorageService,
              private router:Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.role = this.tokenStorage.getAuthorities();
        if (this.role === '[ROLE_ADMIN]') {
          this.authority = 'admin';
          return false;
        } else if (this.role === '[ROLE_TEACHER]') {
          this.authority = 'teacher';
          return false;
        }
        this.authority = 'student';
        return true;
    }
  }


}
