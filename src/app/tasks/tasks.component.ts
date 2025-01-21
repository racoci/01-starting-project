import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {TaskComponent} from "../task/task.component";
import {UserModel} from "../user/user.model";
import {TaskModel} from "../task/task.model";
import {DUMMY_TASKS} from "../dummy-data";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf,
    TaskComponent,
    NgIf
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) user !: UserModel;

  get tasks (): TaskModel[] | undefined {
    return DUMMY_TASKS.filter(task => task.userId === this.user.id);
  }

  onTaskCompleted(task: TaskModel) {

  }
}
