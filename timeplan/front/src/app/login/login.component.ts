import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthLoginInfo} from "../auth/login-info";
import {TokenStorageService} from "../auth/token-storage.service";
import {AuthService} from "../auth/auth.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  role:string = null;

  public email:string;
  public password:string;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
              private router:Router, private load:Ng4LoadingSpinnerService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.logout();
      console.log(this.tokenStorage.getToken());
    }
  }

  onSubmit() {
    this.load.show();
    this.loginInfo = new AuthLoginInfo(
      this.email,
      this.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {

        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.role);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getAuthorities();

        if(data.role == "[ROLE_ADMIN]")
          this.router.navigate([{outlets: {primary: 'admin'}}]);
        if(data.role == "[ROLE_TEACHER]")
          this.router.navigate([{outlets: {primary: 'teacher'}}]);
        if(data.role == "[ROLE_STUDENT]")
          this.router.navigate([{outlets: {primary: 'student'}}]);
        this.load.hide()
      },
      error => {
        alert("Ошибка авторизации");
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.load.hide()
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  logout(){
    this.tokenStorage.signOut();
    this.router.navigate([{outlets: {primary: 'login'}}]);
  }
}
