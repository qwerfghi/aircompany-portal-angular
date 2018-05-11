import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  hide = true;

  constructor(public dialogRef: MatDialogRef<LoginPopupComponent>) {
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
