import {Component} from "@angular/core";
import { TodoComponent } from "./todo/todo.component";


@Component({
  selector:'app-root',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './app.Component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title='angular-todo-app';
}