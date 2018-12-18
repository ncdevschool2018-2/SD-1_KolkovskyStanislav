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
    if (this.tokenStorage.getAuthorities()!= '[ROLE_ADMIN]') {
      this.router.navigate([{outlets: {primary: 'login'}}]);
    }
  }
  logout(){
    this.tokenStorage.signOut();
    this.router.navigate([{outlets: {primary: 'login'}}]);
  }


}
