import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppUser} from "./AppUser";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user !: AppUser;
  @Output() select = new EventEmitter<AppUser>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser = () => {
    this.select.emit(this.user)
  }
}
