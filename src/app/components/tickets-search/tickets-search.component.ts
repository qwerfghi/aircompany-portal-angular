import {Component, OnInit, ViewChild} from '@angular/core';
import {Ticket} from '../../model/entity/Ticket';
import {Migration} from '../../model/entity/Migration';
import {City} from '../../model/entity/City';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DatePipe} from '@angular/common';
import {GlobalService} from '../../service/global.service';

@Component({
  selector: 'app-tickets-search',
  templateUrl: './tickets-search.component.html',
  styleUrls: ['./tickets-search.component.css']
})
export class TicketsSearchComponent implements OnInit {

  private CitiesUrl = 'http://localhost:8080/aircompany/cities';
  private TicketsUrl = 'http://localhost:8080/aircompany/tickets';

  ticket: Ticket;
  cities: City[];

  dataSource = new MatTableDataSource();
  displayedColumns = ['arrival', 'departure', 'cost', 'buy'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private http: HttpClient,
              private datePipe: DatePipe,
              private global: GlobalService) {
  }

  ngOnInit() {
    this.ticket = new Ticket();
    this.ticket.migration = new Migration();
    this.ticket.exchangeAvailable = false;
    this.ticket.returnAvailable = false;
    this.ticket.baggageAvailable = false;
    this.getCities();
  }

  getCities() {
    return this.http.get<City[]>(this.CitiesUrl).subscribe(cities => this.cities = cities.filter(value => value.cityId < 100));
  }

  searchTickets() {
    return this.http.post<Ticket[]>(`${this.TicketsUrl}/search`, this.ticket, this.global.httpOptions)
      .subscribe(tickets => this.dataSource.data = tickets);
  }

  buyTicket(ticket: Ticket) {
    ticket.passenger.passengerId = this.global.currentUser.userId;
    return this.http.post<Ticket>(`${this.TicketsUrl}/buy`, ticket, this.global.httpOptions)
      .subscribe();
  }
}
