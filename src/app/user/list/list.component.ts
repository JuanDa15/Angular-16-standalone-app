import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  providers: [UserService],
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit{
  public usersService = inject(UserService)
  public usersObs$ = this.usersService.usersObs$;

  ngOnInit(): void {
    this.usersService.getUsers()
  }
}
