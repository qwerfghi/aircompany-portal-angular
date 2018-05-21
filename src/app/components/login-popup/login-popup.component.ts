import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {AuthorizationService} from '../../service/authorization.service';
import {GlobalService} from '../../service/global.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  hide = true;

  formData = {
    username: '',
    password: ''
  };

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
              public dialogRef: MatDialogRef<LoginPopupComponent>,
              private authorizationService: AuthorizationService,
              private global: GlobalService) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.authorizationService.findUserByUsernameAndPassword(this.formData.username, this.formData.password)
      .subscribe(currentUser => {
        this.global.currentUser = currentUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      });
  }

  close(): void {
    this.dialogRef.close();
  }
}
