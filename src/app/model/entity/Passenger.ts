import {Country} from './Country';
import {Address} from './Address';
import {Sex} from '../enum/Sex';

export class Passenger {
  passengerId: number;
  name: string;
  lastName: string;
  sex: Sex;
  birthdate: Date;
  passport: string;
  phone: string;
  country: Country;
  address: Address;
}
