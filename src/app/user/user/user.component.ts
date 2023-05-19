import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppStateWithUser } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { loadUser } from 'src/app/store/actions';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  public ar = inject(ActivatedRoute)
  public store: Store<AppStateWithUser> = inject(Store);
  public user$ = this.store.select(({user}) => user.user)
  ngOnInit(): void {
    this.ar.params.subscribe({
      next: ({id}) => {
        this.store.dispatch(loadUser({id: id}))
      }
    })
  }
}
