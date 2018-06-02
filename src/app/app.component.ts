import {Component, OnInit} from '@angular/core';
import {LoginPopupComponent} from './components/login-popup/login-popup.component';
import {MatDialog} from '@angular/material';
import {GlobalService} from './service/global.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selected = 'en';

  constructor(public dialog: MatDialog,
              public sharedService: GlobalService,
              private translate: TranslateService) {
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  showLoginPopup(): void {
    const dialogRef = this.dialog.open(LoginPopupComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.sharedService.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    this.sharedService.currentUser = undefined;
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }
}
