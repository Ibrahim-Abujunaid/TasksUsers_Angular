import { Component , Input, Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

@Output() close=new EventEmitter<void>();

 eneteredTitle='';
 eneteredSummery='';
 eneteredDate='';
onCancelTask1(){
  this.close.emit()
 }
 onSubmit(){

 }
}
