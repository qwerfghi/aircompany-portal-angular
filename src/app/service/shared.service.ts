import {Injectable} from '@angular/core';
import {User} from '../model/entity/User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  currentUser: User;

  constructor() {
  }
}
