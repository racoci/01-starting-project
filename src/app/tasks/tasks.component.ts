import { Component, Input } from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
import {NgForOf, NgIf} from "@angular/common";
import {UserComponent} from "../user/user.component";
import {TaskComponent} from "../task/task.component";
import {AppUser} from "../user/AppUser";
import {AppTask} from "../task/AppTask";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf,
    UserComponent,
    TaskComponent,
    NgIf
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) user !: AppUser;

  get tasks (): AppTask[] | undefined {
    return this.user.tasks;
  }
}
