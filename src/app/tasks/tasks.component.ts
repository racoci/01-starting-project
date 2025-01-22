import {Component, inject, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {TaskComponent} from "../task/task.component";
import {UserModel} from "../user/user.model";
import {TaskModel} from "../task/task.model";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTaskData} from "./new-task/new-task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf,
    TaskComponent,
    NgIf,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
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
