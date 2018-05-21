import {TicketClass} from '../enum/TicketClass';
import {Migration} from './Migration';
import {Passenger} from './Passenger';

export class Ticket {
  ticketId: number;
  passenger: Passenger;
  clazz: TicketClass;
  status: boolean;
  baggageAvailable: boolean;
  exchangeAvailable: boolean;
  returnAvailable: boolean;
  migration: Migration;
  cost: number;
}
