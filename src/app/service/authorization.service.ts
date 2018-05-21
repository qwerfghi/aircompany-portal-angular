import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/entity/User';
import {GlobalService} from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

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
}
