import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, Task, User } from '../app.component';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    serverUrl = 'http://localhost:3000/';

    // private token = ''
    private TOKEN_KEY = 'token'

    setToken(value: string) {
        localStorage.setItem(this.TOKEN_KEY, value);
    }

    getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY) || '';
    }

    deleteToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }
    constructor(private http: HttpClient) { }

    // Example
    getUserPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
    }

    getTasks(): Observable<Array<Task>> {
        return this.GET<Task>(`tasks`);
    }

    addProject(project: Project): Observable<Project> {
        return this.POST<Project>('projects', project);
    }    

    getProjects(): Observable<Array<Project>> {
        return this.GET<Project>(`projects`);
    }    

    GET<DynamicType>(endpoin: string): Observable<Array<DynamicType>> {
        return this.http.get<Array<DynamicType>>(
            `${this.serverUrl}${endpoin}`,
            {
                headers: {
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    // Global post Function
    POST<T>(endpoint: string, data: T): Observable<T> {
        return this.http.post<T>(
            `${this.serverUrl}${endpoint}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    addTask(task: Task): Observable<Task> {
        return this.POST('tasks', task);

        // Old version
        // return this.http.post<Task>(
        //     `${this.serverUrl}tasks`,
        //     task,
        //     { headers: { 'Content-Type': 'application/json' } }
        // )
    }

    deleteTask(id: string): Observable<Task> {
        return this.http.delete<Task>(
            `${this.serverUrl}tasks/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    updateTask(id: string, task: Task): Observable<Task> {
        return this.http.put<Task>(
            `${this.serverUrl}tasks/${id}`,
            task,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    signup(user: User): Observable<User> {
        return this.POST<User>('users/signup', user);
    }

    login(user: User): Observable<User> {
        return this.POST<User>('users/login', user);
    }
}
