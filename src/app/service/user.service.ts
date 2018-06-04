import {Injectable} from '@angular/core';
import {User} from '../model/entity/User';
import {GlobalService} from './global.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../model/entity/Ticket';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UsersUrl = 'http://localhost:8080/aircompany/users';

  constructor(private http: HttpClient,
              private global: GlobalService) {
  }

  findUserByUsernameAndPassword(username: string, password: string) {
    const user = new User();
    user.username = username;
    user.password = password;
    return this.http.post<User>(`${this.UsersUrl}/find`, user, this.global.httpOptions);
  }

  getUserTickets(user: User): Observable<Ticket[]> {
    return this.http.post<Ticket[]>(`${this.UsersUrl}/tickets`, user, this.global.httpOptions);
  }
}
