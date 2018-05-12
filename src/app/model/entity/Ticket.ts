import {TicketClass} from '../enum/TicketClass';
import {Migration} from './Migration';

export class Ticket {
  ticketId: number;
  clazz: TicketClass;
  status: boolean;
  baggageAvailable: boolean;
  exchangeAvailable: boolean;
  returnAvailable: boolean;
  migration: Migration;
  cost: number;
}
