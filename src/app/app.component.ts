import {Component} from '@angular/core';
import {LoginPopupComponent} from './components/login-popup/login-popup.component';
import {MatDialog} from '@angular/material';
import {SharedService} from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected = 'option2';

  constructor(public dialog: MatDialog,
              public sharedService: SharedService) {
  }

  showLoginPopup(): void {
    const dialogRef = this.dialog.open(LoginPopupComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
