import { Component } from '@angular/core';

export interface Task {
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
  developer = 'Yoyo technolegies';

}
