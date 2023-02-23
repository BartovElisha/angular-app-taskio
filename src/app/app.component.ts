import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app-taskio';
  today = new Date();
  tasks: Array<string> = [
      'Your first task',
      'Your second task',
      'Another task',
      'Next Task'
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
}
