import { Component } from "@angular/core";  
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
}