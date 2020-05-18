import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from '../../service/global.service';
import {User} from '../../model/entity/User';
import {UserService} from '../../service/user.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['arrival', 'arrivalDate', 'departure', 'departureDate', 'cost'];

  @ViewChild(MatSort) sort: MatSort;

  user: User;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private sharedService: GlobalService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.sharedService.currentUser;
    this.getTickets();
  }

  getTickets() {
    this.userService.getUserTickets(this.user)
      .subscribe(tickets => {
        this.dataSource.data = tickets;
      });
  }

}
