import { Injectable, } from '@angular/core';
import { ToDo } from '../types/todoInterfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FetcherService {
    url: string = 'https://jsonplaceholder.typicode.com/users/1/todos'

    constructor(private http: HttpClient) { }
    fetchData(): Observable<ToDo[]> {
        return this.http.get<ToDo[]>(this.url)
    }
}
