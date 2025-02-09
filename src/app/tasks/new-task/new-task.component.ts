import {Component, EventEmitter, Output} from '@angular/core';
import {NewTaskData} from "./new-task.model";

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelDialog = new EventEmitter<void>();
  @Output() doneDialog = new EventEmitter<NewTaskData>();
  title = 'New Task';
  summary = '';
  dueDate = '';

  onCancel() {
    this.cancelDialog.emit()
  }

  onSubmit() {
    this.doneDialog.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.summary
    })
  }
}
