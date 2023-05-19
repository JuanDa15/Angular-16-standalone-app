import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { loadUsers } from 'src/app/store/actions';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, LoaderComponent, RouterLink],
  providers: [UserService],
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit{
  public store:Store<AppState> = inject(Store)
  public usersObs$ = this.store.select(({users}) => users.users)
  public loading$ = this.store.select(({users}) => users.loading)
  public error$ = this.store.select(({users}) => users.error)
  ngOnInit(): void {
    this.store.dispatch(loadUsers())
  }
}
