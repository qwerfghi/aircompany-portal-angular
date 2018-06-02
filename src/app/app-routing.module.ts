import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {TicketsSearchComponent} from './components/tickets-search/tickets-search.component';
import {PersonalInformationComponent} from './components/personal-information/personal-information.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'search', component: TicketsSearchComponent},
  {path: 'personal-information', component: PersonalInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
