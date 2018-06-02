import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from '../../service/global.service';
import {User} from '../../model/entity/User';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['arrival', 'departure', 'cost'];

  @ViewChild(MatSort) sort: MatSort;

  user: User;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private sharedService: GlobalService) {
  }

  ngOnInit() {
    this.user = this.sharedService.currentUser;
  }

}
