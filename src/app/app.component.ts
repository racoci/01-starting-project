import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from './dummy-data';
import {TasksComponent} from './tasks/tasks.component';
import {NgFor, NgIf} from "@angular/common"
import {UserModel} from "./user/user.model";


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: UserModel[] = DUMMY_USERS;
  selectedUser: UserModel | undefined = undefined;

  onSelectUser(selectedUser: UserModel) {
    this.selectedUser = this.users.find((user) =>
      user.id === selectedUser.id
    )
  }
}
