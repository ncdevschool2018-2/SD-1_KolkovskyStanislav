import {Component, OnInit} from "@angular/core";
import {TokenStorageService} from "../auth/token-storage.service";
import {Router} from "@angular/router";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector:'teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls:['./teacher-page.component.css']
})

export class TeacherPageComponent implements OnInit{

  private authority: string;
  private role:string;
  constructor(private tokenStorage: TokenStorageService,
              private router:Router,
              private load:Ng4LoadingSpinnerService) { }

  ngOnInit() {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate([{outlets: {primary: 'login'}}]);
    }
  }

  logout(){
    this.tokenStorage.signOut();
    this.router.navigate([{outlets: {primary: 'login'}}]);
  }
}
