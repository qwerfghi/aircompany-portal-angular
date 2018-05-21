import {Component, OnInit} from '@angular/core';
import {LoginPopupComponent} from './components/login-popup/login-popup.component';
import {MatDialog} from '@angular/material';
import {GlobalService} from './service/global.service';
import {User} from './model/entity/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selected = 'option2';

  user: User;

  constructor(public dialog: MatDialog,
              public sharedService: GlobalService) {
  }

  showLoginPopup(): void {
    const dialogRef = this.dialog.open(LoginPopupComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }
}
