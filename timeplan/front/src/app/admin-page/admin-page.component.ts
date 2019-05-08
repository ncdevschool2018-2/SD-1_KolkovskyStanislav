import {Component, OnInit} from "@angular/core";
import {TokenStorageService} from "../auth/token-storage.service";
import {Router} from "@angular/router";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService,
              private router: Router,
              private load: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    if (this.tokenStorage.getAuthorities() != '[ROLE_ADMIN]') {
      this.router.navigate([{outlets: {primary: 'login'}}]);
    }
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate([{outlets: {primary: 'login'}}]);
  }


}
