import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../app.component';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getUserPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
    }

    getTasks(): Observable<Array<Task>> {
        return this.http.get<Array<Task>>('http://localhost:3000/tasks');
    }

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(
            'http://localhost:3000/tasks',
            task,
            { headers: { 'Content-Type': 'application/json' } }
        )
    }    

    deleteTask(id: string): Observable<Task> {
        return this.http.delete<Task>(
            `http://localhost:3000/tasks/${id}`,
            { headers: { 'Content-Type': 'application/json' }}
        );
    }

    updateTask(id: string, task: Task): Observable<Task> {
        return this.http.put<Task>(
            `http://localhost:3000/tasks/${id}`,
            task,
            { headers: { 'Content-Type': 'application/json' }}
        );        
    }
}
