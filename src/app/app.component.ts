import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app-taskio';
  today = new Date();

  getImagePath() {
    return "https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_640.jpg";
  }

  getTaskById(id: number) {
    const tasks = [
      'Your first task',
      'Your second task',
      'Another task'
    ];

    return tasks[id];
  }
}
