import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskModel} from "./task.model";
import {DatePipe, NgIf} from "@angular/common";
import {CardComponent} from "../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgIf,
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: TaskModel;
  @Output() complete = new EventEmitter<TaskModel>();

  onComplete(event: MouseEvent) {
    this.task.completedTimestamp = event.timeStamp
    this.complete.emit(this.task);
  }
}
