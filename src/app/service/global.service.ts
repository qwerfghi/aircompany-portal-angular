import {Injectable} from '@angular/core';
import {User} from '../model/entity/User';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  currentUser: User;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor() {
  }
}
