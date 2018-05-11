import {Component} from '@angular/core';
import {LoginPopupComponent} from './components/login-popup/login-popup.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected = 'option2';

  constructor(public dialog: MatDialog) {
  }

  showLoginPopup(): void {
    const dialogRef = this.dialog.open(LoginPopupComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
