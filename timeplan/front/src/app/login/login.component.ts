import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthLoginInfo} from "../auth/login-info";
import {TokenStorageService} from "../auth/token-storage.service";
import {AuthService} from "../auth/auth.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  private loginInfo: AuthLoginInfo;
  role: string = null;

  public email: string;
  public password: string;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private load: Ng4LoadingSpinnerService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(1)])],
      password: ['', Validators.compose([Validators.minLength(1)])]
  });

    if (this.tokenStorage.getToken()) {
      this.logout();
      console.log(this.tokenStorage.getToken());
    }
  }

  public login() {
    if(this.loginForm.valid){
      this.load.show();
      console.log(this.loginForm.value)
      this.authService.attemptAuth(this.loginForm.value).subscribe(
        data => {

          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.role);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.role = this.tokenStorage.getAuthorities();

          if (data.role == "[ROLE_ADMIN]")
            this.router.navigate([{outlets: {primary: 'admin'}}]);
          if (data.role == "[ROLE_TEACHER]")
            this.router.navigate([{outlets: {primary: 'teacher'}}]);
          if (data.role == "[ROLE_STUDENT]")
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
  }

  reloadPage() {
    window.location.reload();
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate([{outlets: {primary: 'login'}}]);
  }
}
