import { Injectable, } from '@angular/core';
import { ToDo } from '../types/todoInterfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FetcherService {
    url: string = 'https://jsonplaceholder.typicode.com/users/1/todos'
    todos: ToDo[] = [
        { userId: 1, id: 1, title: 'Complete assignment', completed: false, editing: false },
        { userId: 1, id: 2, title: 'Go for a run', completed: true, editing: false },
        { userId: 2, id: 3, title: 'Buy groceries', completed: false, editing: false },
        { userId: 2, id: 4, title: 'Read a book', completed: true, editing: false },
        { userId: 3, id: 5, title: 'Call mom', completed: false, editing: false },
        { userId: 3, id: 6, title: 'Finish coding project', completed: false, editing: false },
        { userId: 4, id: 7, title: 'Walk the dog', completed: true, editing: false },
        { userId: 4, id: 8, title: 'Do laundry', completed: false, editing: false },
        { userId: 5, id: 9, title: 'Plan vacation', completed: true, editing: false },
        { userId: 5, id: 10, title: 'Study for exam', completed: false, editing: false },
        { userId: 6, id: 11, title: 'Write blog post', completed: false, editing: false },
        { userId: 6, id: 12, title: 'Practice guitar', completed: true, editing: false },
        { userId: 7, id: 13, title: 'Clean the house', completed: false, editing: false },
        { userId: 7, id: 14, title: 'Attend meeting', completed: false, editing: false },
        { userId: 8, id: 15, title: 'Cook dinner', completed: true, editing: false },
        { userId: 8, id: 16, title: 'Watch movie', completed: false, editing: false },
        { userId: 9, id: 17, title: 'Finish presentation', completed: false, editing: false },
        { userId: 9, id: 18, title: 'Go to the gym', completed: true, editing: false },
        { userId: 10, id: 19, title: 'Call friend', completed: false, editing: false },
        { userId: 10, id: 20, title: 'Pay bills', completed: false, editing: false }
    ];

    constructor(private http: HttpClient) { }
    fetchData(): Observable<ToDo[]> {
        return this.http.get<ToDo[]>(this.url)
    }
}
