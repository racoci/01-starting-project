import {Component, inject, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {UserModel} from "../user/user.model";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTaskData} from "./new-task/new-task.model";
import {TasksService} from "./tasks.service";
import {TaskComponent} from "./task/task.component";
import {TaskModel} from "./task/task.model";


@Component({
  imports: [
    NgForOf,
    TaskComponent,
    NgIf,
    NewTaskComponent
  ],
  selector: 'app-tasks',
  standalone: true,
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html'
})

export class TasksComponent {
  @Input({required: true}) user !: UserModel;

  private tasksService = inject(TasksService)
  isAddingTask = false;
  addTaskButtonText = "Add Task";

  get uncompleted (): TaskModel[] {
    return this.tasksService.getTasksToDoByUserId(this.user.id);
  }

  get completed (): TaskModel[] {
    return this.tasksService.getCompletedByUserid(this.user.id);
  }

  onTaskCompleted(task: TaskModel) {

  }

  onStartAddingTask() {
    this.addTaskButtonText += " Clicked"
    this.isAddingTask = true
  }

  onCancelAddingTask() {
    this.isAddingTask = false
  }

  onAddTask(newTask: NewTaskData) {
    this.isAddingTask = false
    this.tasksService.insertNewTask(newTask, this.user.id)
  }
}
