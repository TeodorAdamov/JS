import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { AppService } from '../app.service';
import { ToDo } from '../types/todoInterfaces';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-todo',
    standalone: true,
    imports: [CommonModule, EditComponent],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    animations: [
        trigger('myTrigger', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('300ms', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                animate('300ms', style({ opacity: 0 }))
            ])
        ]),
    ]
})
export class TodoComponent implements OnInit {
    isEditting: boolean = true;
    todos: ToDo[] = [];
    method: string = '';
    disabled: string = 'disabled';

    constructor(public appServ: AppService) { }


    ngOnInit() {
        this.todos = this.appServ.toDoList
    }

    onUserComplete(liElement: HTMLLIElement): void {
        this.method = 'complete'
        this.appServ.onInteract(liElement, this.method);
    }

    onUserDelete(liElement: HTMLLIElement): void {
        this.method = 'delete'
        this.appServ.onInteract(liElement, this.method);
    }

    onUserEdit(liElement: HTMLLIElement): void {
        this.method = 'edit'
        this.appServ.onInteract(liElement, this.method);
    }

}
