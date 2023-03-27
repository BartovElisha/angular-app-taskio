import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit  {
    projects: Array<Project> = [];

    constructor(private api: ApiService) {
    }

    ngOnInit(): void {
        this.api.getProjects().subscribe({
            next: (data: Array<Project>) => this.projects = data,
            error: (err) => console.log(err)
        })
    }
}
