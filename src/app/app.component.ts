import {Component} from '@angular/core';
import {DUMMY_USERS} from './dummy-data';
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
