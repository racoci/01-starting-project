import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from "./user.model";

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user !: UserModel;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<UserModel>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser = () => {
    this.select.emit(this.user)
  }

}
