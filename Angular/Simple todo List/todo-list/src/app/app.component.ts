import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ToDo } from './types/todoInterfaces';
import { AppService } from './app.service';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, TodoComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges {
    title = 'Todo List';
    constructor(public appServ: AppService) { }


    ngOnInit(): void {
        this.appServ.getData();
    }

    ngOnChanges(): void {

    }

    input(userInput: HTMLInputElement) {
        const userInputToDo: ToDo = {
            userId: 1,
            id: this.appServ.toDoList.length + 1,
            title: userInput.value,
            completed: false,
            editting: false
        }
        this.appServ.processData(userInputToDo)
        console.log(this.appServ.toDoList);

    }
}
