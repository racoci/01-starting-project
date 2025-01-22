import {TaskModel} from "../task/task.model";
import {DUMMY_TASKS} from "../dummy-data";
import {NewTaskData} from "./new-task/new-task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks: TaskModel[] = DUMMY_TASKS;

  getTasksToDoByUserId (userId: string): TaskModel[] {
    return this.tasks.filter(task => task.userId === userId && !task.completedTimestamp);
  }

  getCompletedByUserid(userId: string): TaskModel[] {
    return this.tasks.filter(task => task.userId === userId && !!task.completedTimestamp);
  }

  insertNewTask(newTask: NewTaskData, userId: string) {

    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      ...newTask
    })
  }
}
