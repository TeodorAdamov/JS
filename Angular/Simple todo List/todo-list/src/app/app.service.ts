import { Injectable } from '@angular/core';
import { ToDo } from './types/todoInterfaces';
import { FetcherService } from './data/fetcher.service';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    toDoList: ToDo[] = [];
    loading: boolean = true;
    isEditting: boolean = false;

    constructor(private fetchService: FetcherService) { }

    getData() {
        this.toDoList = this.fetchService.todos
        this.loading = false;
        // this.fetchService.fetchData()
        //     .pipe(map(objects => {
        //         return objects
        //             .map(obj => {
        //                 return { ...obj, editting: false }
        //             })
        //     })).subscribe((response: ToDo[]) => {
        //         this.toDoList.push(...response)
        //         this.loading = false;
        //     })
    }
    processData(userInput: ToDo): void {
        if (userInput.title) {
            this.toDoList.push(userInput);
        }
    }

    onInteract(liElement: HTMLLIElement, method: string): void {

        const id = Number(liElement.id);
        const todo: ToDo = this.toDoList.find(todo => todo.id === id)!;
        switch (method) {
            case 'complete': {
                if (!todo.editing) {
                    todo.completed = !todo.completed;
                }
            }
                break;
            case 'delete': {
                if (!todo.completed && !todo.editing) {
                    if (window.confirm('Are you sure you want to delete ?')) {
                        this.toDoList.splice(this.toDoList.indexOf(todo), 1);
                    }
                }
            }
                break;
            case 'edit': {
                if (!todo.completed && !todo.editing) {
                    this.isEditting = true;
                    todo.editing = !todo.editing;
                }
            }
        }
    }

    onEditCancel(id: number) {
        const todo: ToDo = this.toDoList.find(todo => todo.id === id)!
        todo.editing = !todo.editing;
        this.isEditting = false;
    }

    onEditSave(userInput: string, id: number) {
        const todo: ToDo = this.toDoList.find(todo => todo.id === id)!;
        todo.title = userInput;
        todo.editing = false;
        this.isEditting = false;
    }
}






