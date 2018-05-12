import {Sex} from '../enum/Sex';
import {Country} from './Country';
import {Address} from './Address';

export class Person {
  personId: number;
  name: string;
  lastName: string;
  sex: Sex;
  birthdate: Date;
  passport: string;
  phone: string;
  email: string;
  country: Country;
  address: Address;
}
