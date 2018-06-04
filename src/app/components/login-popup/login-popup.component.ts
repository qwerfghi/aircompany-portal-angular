import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {GlobalService} from '../../service/global.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  hide = true;

  formData;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
              public dialogRef: MatDialogRef<LoginPopupComponent>,
              private userService: UserService,
              private global: GlobalService) {
  }

  ngOnInit() {
    this.formData = {
      username: '',
      password: ''
    };
  }

  onLogin() {
    this.userService
      .findUserByUsernameAndPassword(this.formData.username, this.formData.password)
      .subscribe(currentUser => {
        this.global.currentUser = currentUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.close();
      });
  }

  close(): void {
    this.dialogRef.close();
  }
}
