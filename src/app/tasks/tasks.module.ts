import {NgModule} from "@angular/core";
import {TasksComponent} from "./tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {CommonModule, NgFor, NgIf} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {TaskComponent} from "./task/task.component";

@NgModule({
  declarations: [
    TasksComponent,
    TasksComponent,
    NewTaskComponent,
    TaskComponent
  ],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, NgFor, NgIf, SharedModule],
})
export class TasksModule {}
