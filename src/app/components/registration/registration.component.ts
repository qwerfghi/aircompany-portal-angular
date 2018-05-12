import {Component, OnInit} from '@angular/core';
import {User} from '../../model/entity/User';
import {Person} from '../../model/entity/Person';
import {Address} from '../../model/entity/Address';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Country} from '../../model/entity/Country';
import {MatSnackBar} from '@angular/material';
import {SharedService} from '../../service/shared.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private UsersUrl = 'http://localhost:8080/aircompany/users';
  private CountriesUrl = 'http://localhost:8080/aircompany/countries';

  hide = true;

  user: User;
  person: Person;
  address: Address;
  countries: Country[];

  constructor(private http: HttpClient,
              public snackBar: MatSnackBar,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.user = new User();
    this.person = new Person();
    this.user.person = this.person;
    this.address = new Address();
    this.person.address = this.address;
    this.getCountries();
  }

  registerUser() {
    this.http.post<User>(`${this.UsersUrl}/register`, this.user, httpOptions).subscribe(next => {
      this.sharedService.currentUser = this.user;
    }, err => {
      this.snackBar.open('Error', null, {
        duration: 2000,
      });
      console.error('Observer got an error: ' + err);
    });
  }

  getCountries() {
    return this.http.get<Country[]>(this.CountriesUrl).subscribe(countries => this.countries = countries);
  }

}
