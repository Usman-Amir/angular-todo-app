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
  tasks: Task[] =[];
  newTask: string='';

  addTask(){
    if(this.newTask.trim()){
      this.tasks.push({text: this.newTask.trim(), completed: false});
      this.newTask='';
    }
  }
  toggleTask(index:  number){
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index:number){
    this.tasks.splice(index,1);
  }
  
 }
