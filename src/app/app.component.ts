import { Component } from '@angular/core';

interface Task {
  title: string;
  complete: boolean;
  description?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app-taskio';
  today = new Date();
  tasks: Array<Task> = [
    {
      title: 'Your first task',
      complete: false,
      description: 'Eng Task' 
    },
    {
      title: 'Your second task',
      complete: false 
    },
    {
      title: 'Another task',
      complete: false 
    },
    {
      title: 'task 4#',
      complete: true 
    }
  ];

  listStatusCss(): string {
    return this.tasks.length <= 3 ? 'text-success' : 'text-dark';
  }

  getImagePath() {
    return "https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_640.jpg";
  }

  getTaskById(id: number) {
    return this.tasks[id];
  }

  completedCss(task: Task): string {
    return task.complete ? 'text-decoration-line-through' : ''
  }
}
