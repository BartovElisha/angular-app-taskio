import { Component, Input } from '@angular/core';
import { Project } from '../app.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() projectItem: Project = {
    title: '',
    description: '',
    image: '',
    status: 'PLANNED'
  };

  projectStatusCss(project: Project): string {
    switch (project.status) {
      case 'PLANNED':
        return 'bi-clipboard';

      case 'IN PROGRESS':
        return 'bi-clock-history';

      case 'DONE':
        return 'bi-check-circle';

      default: 
        return '';  
    }
  }
}
