import { Component, Input, Output,EventEmitter } from '@angular/core';


type Task={
  userId: string,
  id: string,
  title: string,
  dueDate: string,
  summary: string
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
    @Input() task!:Task;
    @Output() completed = new EventEmitter<string>();

    onCompleteTask(){
      this.completed.emit(this.task.id)
    }
}
