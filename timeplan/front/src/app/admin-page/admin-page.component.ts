import {Component, OnInit} from "@angular/core";
import {TabsetComponent} from "ngx-bootstrap";
import {Teacher} from "../models/teacher";
import {Subject} from "../models/subject";
import {Student} from "../models/student";
import {TokenStorageService} from "../auth/token-storage.service";
import {Router} from "@angular/router";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector:'admin-page',
  templateUrl:'./admin-page.component.html',
  styleUrls:['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit{

  //private roles: string[];
  private authority: string;
  private role:string;
  constructor(private tokenStorage: TokenStorageService,
              private router:Router,
              private load:Ng4LoadingSpinnerService) { }

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
    else{
      this.router.navigate([{outlets: {primary: 'login'}}]);
    }
    //this.load.hide();
  }
  logout(){
    this.tokenStorage.signOut();
    this.router.navigate([{outlets: {primary: 'login'}}]);
  }


}
