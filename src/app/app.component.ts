import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; // ✅ Import TodoComponent

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Standalone mode
  imports: [TodoComponent],  // ✅ Import TodoComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-app';
}
