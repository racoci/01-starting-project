import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from './dummy-users';
import {TasksComponent} from './tasks/tasks.component';
import {NgFor, NgIf} from "@angular/common"
import {AppUser} from "./user/AppUser";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: AppUser[] = DUMMY_USERS;
  selectedUser: AppUser | undefined = undefined;

  onSelectUser(selectedUser: AppUser) {
    this.selectedUser = this.users.find((user) =>
      user.id === selectedUser.id
    )
  }
}
