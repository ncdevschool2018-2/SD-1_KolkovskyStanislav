import {Component, OnInit} from "@angular/core";
import {Task} from "../models/task";
import {TaskService} from "../services/task.service";
import {TokenStorageService} from "../auth/token-storage.service";
import {Router} from "@angular/router";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";


@Component({
  selector: 'student-page',
  templateUrl: './student-page.component.html',
  styleUrls:['./student-page.component.css']
})

export class StudentPageComponent implements OnInit{



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
