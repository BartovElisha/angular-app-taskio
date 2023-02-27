import { Component } from '@angular/core';

interface Task {
  title: string;
  complete: boolean;
  description?: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    status: 'PLANNED' | 'IN PROGRESS' | 'DONE';  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app-taskio';
  today = new Date();

  sectionTitle1 = 'Today\'s Tasks';
  sectionTitle2 = 'My Projects';
  developer = 'Yoyo technolegies';

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

    projects: Array<Project> = [
        {
            title: 'my first project',
            description: 'such an awesome project, I am sure it would be a huge success.',
            image: 'https://cdn.pixabay.com/photo/2023/02/20/07/26/problem-7801590__340.jpg',
            status: 'PLANNED'
        },
        {
            title: 'Art project',
            description: 'because I love creating art',
            image: 'https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831__340.jpg',
            status: 'IN PROGRESS'
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
