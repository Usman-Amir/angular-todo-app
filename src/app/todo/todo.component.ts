import { Component, numberAttribute } from "@angular/core";  
import { CommonModule } from "@angular/common"; 
import { FormsModule } from "@angular/forms";

interface Task{
  text: string;
  completed: boolean
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls:['./todo.component.css']
})

export class TodoComponent{
  task: Task[] =[];
  newTask: string='';

  addTask(){
    if(this.newTask.trim()){
      this.task.push({text: this.newTask.trim(), completed: false});
      this.newTask='';
    }
  }
  toggleTask(index:  number){
    this.task[index].completed = !this.task[index].completed;
  }

  deleteTask(index:number){
    this.task.splice(index,1);
  }
  
 }
