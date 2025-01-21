import {Component, Input} from '@angular/core';
import {AppTask} from "./AppTask";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: AppTask;

}
